import reflex as rx

from app.tools.db_interact import *
from app.components.complaint_card import complaint_card
import app.components.lightbox as lb

class CustomerServiceState(rx.State):
    
    data: list[dict[str, str]] = []
    column_headers: list[str] = []
    
    sort_categories: list[str] = ['Priority', 'Upload Date']
    sort_value: str = ""
    sort_direction: str = ""
    search_value: str = ""
    
    @rx.var(cache=True)
    def current_data(self) -> list[dict]:
        
        new_data = self.data

        priority_order = {'High': 1, 'Medium': 2, 'Low': 3}

        def get_sort_key(entry: dict, sort_value: str) -> str:
            if sort_value == 'Priority':
                return priority_order.get(entry.get(sort_value, 'Low'))
            return str(entry.get(sort_value, '')).lower()

        # Sorting
        if self.sort_value != "":
            reverse = self.sort_direction == 'desc'
            new_data = sorted(
                new_data,
                key=lambda entry: get_sort_key(entry, self.sort_value),
                reverse=reverse
            )

        # Searching
        if self.search_value != "":
            new_data = [
                entry for entry in new_data
                if any(self.search_value.lower() in str(entry.get(attr, '')).lower() for attr in self.column_headers)
            ]

        return new_data
    
    @rx.var(cache=True)
    def new_data(self) -> list[dict[str, str]]:
        return [doc for doc in self.current_data if doc.get('Status') == 'New']
    @rx.var(cache=True)
    def inprogress_data(self) -> list[dict[str, str]]:
        return [doc for doc in self.current_data if doc.get('Status') == 'In Progress']
    @rx.var(cache=True)
    def resolved_data(self) -> list[dict[str, str]]:
        return [doc for doc in self.current_data if doc.get('Status') == 'Resolved']
    
    @rx.var(cache=True)
    def new_count(self) -> int:
        return len(self.new_data)
    @rx.var(cache=True)
    def inprogress_count(self) -> int:
        return len(self.inprogress_data)
    @rx.var(cache=True)
    def resolved_count(self) -> int:
        return len(self.resolved_data)
    
    def get_data(self):
        response = get_documents('complaints')
        
        self.data = response
        self.column_headers = list(response[0].keys())
    
    def get_filtered_data(self, status: str) -> list[dict]:
        return [doc for doc in self.data if doc.get('Status') == status]
    
    def set_search(self, text: str):
        self.search_value = text
        
    def set_sort(self, column: str):
        if self.sort_value == column:
            # Toggle the sort direction
            self.sort_direction = 'desc' if self.sort_direction == 'asc' else 'asc'
        else:
            # Set the sort value and reset the sort direction to ascending
            self.sort_value = column
            self.sort_direction = 'asc'
    
    def handle_refresh(self):
        self.data = get_documents('complaints') 

        self.sort_value: str = ""
        self.sort_direction: str = ""
        self.search_value: str = ""
    

def customer_service() -> rx.Component:
    return rx.vstack(
        lb.editing_lightbox(),
        rx.hstack(
            rx.button(rx.icon(tag="plus"), "New Ticket", on_click=lb.EditingState.open_box('complaints', {})),
            rx.spacer(),
            rx.text('Sort By:'),
            rx.select(CustomerServiceState.sort_categories, value=CustomerServiceState.sort_value, on_change=CustomerServiceState.set_sort, position='popper'),
            rx.input(placeholder='Search...', value=CustomerServiceState.search_value, on_change=CustomerServiceState.set_search),
            align='center',
            style={"width": "100%"}
        ),
        rx.hstack(
            rx.vstack(
                rx.text(f"New ({CustomerServiceState.new_count})"),
                rx.foreach(
                    CustomerServiceState.new_data,
                    complaint_card
                ),
                style={'width': '400px'},
            ),
            rx.vstack(
                rx.text(f"In Progress ({CustomerServiceState.inprogress_count})"),
                rx.foreach(
                    CustomerServiceState.inprogress_data,
                    complaint_card
                ),
                style={'width': '400px'},
            ),
            rx.vstack(
                rx.text(f"Resolved ({CustomerServiceState.resolved_count})"),
                rx.foreach(
                    CustomerServiceState.resolved_data,
                    complaint_card
                ),
                style={'width': '400px'},
            ),
        ),
        rx.hstack(
            rx.spacer(),
            rx.button(rx.icon(tag="rotate-ccw", size=18), size="2", color_scheme="gray", variant="ghost", on_click=CustomerServiceState.handle_refresh()),
            style={'width': '100%'}
        ),
        on_mount=CustomerServiceState.get_data()
    )

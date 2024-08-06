import reflex as rx

import app.tools.db_interact as dbi
from app.components import lightbox as lb

class TableState(rx.State):
    doc_type: str = ''
    doc_id: str = None
    
    data: list[dict[str, str]] = []
    column_headers: list[str] = []
    
    sort_value: str = ""
    sort_direction: str = ""
    search_value: str = ""
    
    def get_data(self, collection: str):
        response = dbi.get_documents(collection)

        self.doc_type = collection
        
        self.data = response
        self.column_headers = list(self.data[0].keys())
    
    @rx.var(cache=True)
    def current_data(self) -> list[dict]:
        
        new_data = self.data

        def get_sort_key(entry: dict, sort_value: str) -> str:
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
    def num_items(self) -> int:
        return len(self.current_data)
    
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
    
    def doc_clicked(self, id: str):
        self.doc_id = id
        lb.EditingState.open_box(self.doc_type, id)
        print(id)
        
    def handle_refresh(self):
        
        self.doc_id: str = None
        
        self.data = []
        self.column_headers = []
        
        self.sort_value = ""
        self.sort_direction = ""
        self.search_value = ""
        
        self.get_data(self.doc_type)
        
def data_table(dtype: str) -> rx.Component:
    return rx.cond(
        TableState.doc_type == dtype,
        rx.vstack(
            rx.hstack(
                rx.button(rx.icon(tag="plus"), f"New {TableState.doc_type}", on_click=lb.EditingState.open_box(TableState.doc_type, {})),
                lb.viewing_lightbox(),
                lb.editing_lightbox(),
                rx.spacer(),
                rx.text('Sort By:'),
                rx.select(TableState.column_headers, value=TableState.sort_value, on_change=TableState.set_sort, position='popper'),
                rx.input(placeholder='Search...', value=TableState.search_value, on_change=TableState.set_search),
                align='center',
                style={"width": "100%"}
            ),
            rx.table.root(
                rx.table.header(
                    rx.table.row(
                        rx.foreach(
                            TableState.column_headers,
                                lambda column:
                                    rx.table.column_header_cell(
                                        rx.hstack(
                                            rx.text(column),
                                            rx.spacer(),
                                            rx.cond(
                                                TableState.sort_value == column,
                                                rx.cond(TableState.sort_direction == 'asc', 
                                                    rx.icon(tag='arrow-up', size=20), rx.icon(tag='arrow-down', size=20)
                                                ),
                                                rx.icon(tag='arrow-down-up', size=20),
                                            ),
                                            align='center'
                                        ),
                                        on_click=TableState.set_sort(column)
                                    ),
                        ),
                    ),
                    style={"width": "100%"}
                ),
                rx.table.body(
                    rx.foreach(
                        TableState.current_data,
                        lambda doc:
                            rx.table.row(
                                rx.foreach(
                                    doc, 
                                    lambda entry: 
                                        rx.table.cell(entry[1])
                                ),
                                on_click=lb.ViewingState.open_box(TableState.doc_type, doc)
                            )
                    ),
                    style={"width": "100%"}
                ),
                variant='surface',
                style={"width": "100%"}
            ),
            rx.hstack(
                rx.spacer(),
                rx.text(f"{TableState.num_items} result(s)", size="2"),
                rx.spacer(justify='start'),
                # rx.button(rx.icon(tag="filter", size=18), size="2", color_scheme="gray", variant="ghost"),
                # rx.button(rx.icon(tag="download", size=18), size="2", color_scheme="gray", variant="ghost"),
                rx.button(rx.icon(tag="rotate-ccw", size=18), size="2", color_scheme="gray", variant="ghost", on_click=TableState.handle_refresh()),
                justify="center",
                style={"width": "100%"},
            ),
            style={"width": "100%"}
        )
    )
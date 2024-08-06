import reflex as rx

data = [
        {
            'Name': 'John Plumb',
            'Purpose': 'Plumbing',
            'Phone Number': '(678) 923-5246',
            'Email Address': 'plumberjohn@plumbing.com',
        },
        {
            'Name': 'Isaac Newton',
            'Purpose': 'Electric',
            'Phone Number': '(748) 384-2678',
            'Email Address': 'sireyesac@electricity.com',
        },
        {
            'Name': 'Eagle Steve',
            'Purpose': 'Landlord',
            'Phone Number': '(190) 298-2487',
            'Email Address': 'baldeagle@steverealty.com',
        }
    ]

class OfficePhonebookState(rx.State):
    
    column_headers: list[str] = ['Name', 'Purpose', 'Phone Number', 'Email Address']
    sort_value: str = ""
    sort_direction: str = ''
    search_value: str = ""
    
    @rx.var(cache=True)
    def current_data(self) -> list[dict]:
        
        new_data = data

        # Sorting
        if self.sort_value != "":
            reverse = self.sort_direction == 'desc'
            new_data = sorted(
                new_data,
                key=lambda entry: str(entry.get(self.sort_value, '')).lower(),
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
        print(f"Sorting by {self.sort_value} in {self.sort_direction} order")

        


def office_phonebook() -> rx.Component:
    
    return rx.vstack(
        # New Request Button
        rx.hstack(
            rx.spacer(),
            rx.text('Sort By:'),
            rx.select(OfficePhonebookState.column_headers, value=OfficePhonebookState.sort_value, on_change=OfficePhonebookState.set_sort, position='popper'),
            rx.input(placeholder='Search...', value=OfficePhonebookState.search_value, on_change=OfficePhonebookState.set_search),
            align='center',
            style={"width": "100%"}
        ),
        # Data table
        rx.box(
            rx.table.root(
                rx.table.header(
                    rx.table.row(
                        rx.foreach(
                            OfficePhonebookState.column_headers,
                            lambda column:
                                rx.table.column_header_cell(
                                    rx.hstack(
                                        rx.text(column),
                                        rx.spacer(),
                                        rx.cond(
                                            OfficePhonebookState.sort_value == column,
                                            rx.cond(OfficePhonebookState.sort_direction == 'asc', 
                                                rx.icon(tag='arrow-up'), rx.icon(tag='arrow-down')
                                            ),
                                            rx.icon(tag='arrow-down-up'),
                                        ),
                                        align='center'
                                    ),
                                    on_click=OfficePhonebookState.set_sort(column)
                                ),
                        ),
                    ),
                ),
                rx.table.body(
                    rx.foreach(
                        OfficePhonebookState.current_data,
                        lambda doc:
                            rx.table.row(
                                rx.foreach(
                                    doc, 
                                    lambda entry: 
                                        rx.table.cell(entry[1])
                                ),
                            )
                    )
                ),
                variant='ghost',
                style={"border": "1px solid #ccc", "padding": "10px", "width": "100%"},
            ),
            style={"width": "100%"},
        ),
        # Table footer
        rx.hstack(
            rx.spacer(),
            rx.text(f"{OfficePhonebookState.num_items} result(s)", size="2"),
            rx.spacer(),
            justify="center",
            style={"width": "100%"},
        ),
        style={"width": "100%"},
    )

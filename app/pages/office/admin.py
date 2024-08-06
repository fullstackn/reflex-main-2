import reflex as rx

from app.tools import db_interact as dbi

role = 'admin'

class AdminState(rx.State):
    
    role_edit_success: bool = False
    notes_edit_success: bool = False
    
    # Checks if user accessed the page via link and redirects them to home if they aren't an admin
    async def admin_check(self):
        
        ## Temporarily set to admin for testing
        role = 'admin'

        if role:
            if role != 'admin':
                return rx.redirect("/home")
        return None
    
    def role_change(self, form_data: dict):
        dbi.update_document('users', {'Username': form_data['user']}, {'Role': form_data['new_role']})
        self.role_edit_success = True
    
    def notes_change(self, form_data: dict):
        dbi.update_document('users', {'Username': form_data['user']}, {'Notes': form_data['notes']})
        self.notes_edit_success = True
        

def admin() -> rx.Component:
    return rx.vstack(
        rx.heading("Admin Panel", size="9"),
        rx.heading("Edit User Role", size="6"),
        rx.form.root(
            rx.hstack(
                rx.select(
                    [user['_id'] for user in dbi.get_documents('users')],
                    placeholder='Select a user',
                    name='user',
                    size='3',
                ),
                rx.select(
                    ['admin', 'manager', 'scrub'],
                    placeholder='Select role',
                    name='new_role',
                    size='3'
                ),
                rx.button(
                    'Set Role',
                    type='submit',
                    size='3',
                ),
                rx.cond(
                    AdminState.role_edit_success,
                    rx.callout(
                        'Success',
                        icon='check',
                        color_scheme='green',
                        size='1',
                    )
                ),
            ),
            on_submit=AdminState.role_change()
        ),
        rx.heading("Edit Salary/Comission Notes", size="6"),
        rx.form.root(
            rx.hstack(
                rx.select(
                    [user['_id'] for user in dbi.get_documents('users')],
                    placeholder='Select a user',
                    name='user',
                    size='3',
                ),
                rx.input(
                    placeholder='Add notes',
                    name='notes',
                    size='3'
                ),
                rx.button(
                    'Set Notes',
                    type='submit',
                    size='3',
                ),
                rx.cond(
                    AdminState.notes_edit_success,
                    rx.callout(
                        'Success',
                        icon='check',
                        color_scheme='green',
                        size='1',
                    )
                ),
                justify='center'
            ),
            on_submit=AdminState.notes_change()
        ),
    )
    
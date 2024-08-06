from app.components.forms import view_form, edit_form, FormState
from app.tools.db_interact import update_document

import reflex as rx
from datetime import datetime
from bson import ObjectId

class ViewingState(rx.State):
    is_box_open: bool = False
    collection: str = ''
    doc: dict = {}
    
    async def open_box(self, new_collection: str, new_doc: dict):
        self.is_box_open = True
        self.collection = new_collection
        self.doc = new_doc
        (await self.get_state(FormState)).get_form(new_doc, new_collection)
    
    def close_box(self):
        self.is_box_open = False
           
    async def handle_edit(self, collection: str, doc: str):
        
        # Switch lightboxes
        editing_state: EditingState = await self.get_state(EditingState)
        await editing_state.open_box(collection, doc)
        
        self.close_box()
    
def viewing_lightbox() -> rx.Component:
    return rx.dialog.root(
        rx.dialog.content(
            rx.vstack(
                rx.hstack(
                    rx.dialog.title(f"View {ViewingState.collection}", style={'margin': 0}),
                    rx.button(rx.icon(tag="x", size=25),
                        size="2",
                        color_scheme="gray",
                        variant="ghost",
                        type='reset',
                        on_click=ViewingState.close_box(),
                        style={"position": "absolute", "top": "10px", "right": "10px"},
                    ),
                ),
                view_form(),
                rx.hstack(
                    rx.spacer(),
                    # Edit Button
                    rx.button(
                        "Edit",
                        on_click=ViewingState.handle_edit(ViewingState.collection, ViewingState.doc),
                        color_scheme="blue",
                        style={"right": "1em"},
                    ),
                    style={"width": "100%", "top": "1em"}
                ),
                justify='end',
                style={"width": '100%'},
                spacing='4',
            ),
        ),
        open=ViewingState.is_box_open,
    )
    
class EditingState(rx.State):
    is_box_open: bool = False
    collection: str = ''
    doc: dict = {}
    
    async def open_box(self, new_collection: str, new_doc: dict):
        self.is_box_open = True
        self.collection = new_collection
        self.doc = new_doc
        print(new_doc)
        (await self.get_state(FormState)).get_form(new_doc, new_collection)
    
    def close_box(self):
        self.is_box_open = False
           
    def handle_submit(self, form_data: dict):
        
        # Adjust edit date
        form_data['Last Edit Date'] = str(datetime.now())
        
        # Changes object in database
        update_document(self.collection, {'_id': ObjectId(self.doc['_id'])}, form_data)
        
        self.close_box()
    
def editing_lightbox() -> rx.Component:
    return rx.dialog.root(
        rx.dialog.content(
            rx.form.root(
                rx.vstack(
                    rx.hstack(
                        rx.dialog.title(f"Edit {EditingState.collection}", style={'margin': 0}),
                        rx.button(rx.icon(tag="x", size=25),
                            size="2",
                            color_scheme="gray",
                            variant="ghost",
                            type='reset',
                            on_click=EditingState.close_box(),
                            style={"position": "absolute", "top": "10px", "right": "10px"},
                        ),
                    ),
                    edit_form(),
                    rx.hstack(
                        rx.dialog.root(
                            rx.dialog.trigger(
                                rx.button(
                                    "Delete Request",
                                    color_scheme='red',
                                    type='reset',
                                ),
                            ),
                            rx.dialog.content(
                                rx.dialog.title('Are you sure you wish to delete?'),
                                rx.dialog.close(
                                    rx.hstack(
                                        rx.button('Cancel', color_scheme='gray'),
                                        rx.button('Delete', color_scheme='red'),
                                    ),
                                ),
                                size='2',
                            ),
                        ),
                        rx.spacer(),
                        # Submit Button
                        rx.button(
                            "Submit",
                            type='submit',
                            color_scheme="blue",
                            style={"right": "1em"},
                        ),
                        style={"width": "100%", "top": "1em"}
                    ),
                    justify='end',
                    style={"width": '100%'},
                    spacing='4',
                ),
                on_submit=EditingState.handle_submit
            ),
        ),
        open=EditingState.is_box_open,
    )
    
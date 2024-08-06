import reflex as rx
from bson import ObjectId
import re

import app.tools.db_interact as dbi

def text_box(key: str, value: str):
    return rx.vstack(
        rx.text.strong(key),
        rx.text(
            value,
            name=key,
        ),
        rx.spacer(),
        spacing='1',
    )
    
class DownloadState(rx.State):
    
    key: str = ''
    files: list[int] = []
    
    @rx.var(cache=True)
    def images(self) -> list[str]:
        return [dbi.get_image(file) for file in self.files]
    
    def get_files(self, key: str, files: list[int]):
        self.key = key
        self.files = files
        print(self.files)
        
def file_download(key: str, files: str):
    
    return rx.vstack(
        rx.text.strong(key),
        rx.popover.root(
            rx.popover.trigger(
                rx.button("Download Files", on_click=DownloadState.get_files(key, files), variant='soft')
            ),
            rx.popover.content(
                rx.vstack(
                    rx.foreach(
                        DownloadState.images,
                        lambda image: 
                            rx.button(
                                # dict(dbi.db['fs.files'].find_one({'_id': ObjectId(file)}))['filename'],
                                rx.image(src=image, style={'height': '50px', 'width': '50px'}),
                                on_click=rx.download(url=image),
                                variant='ghost',
                                style={'width': '100%'}
                            )
                    )
                )
            )
        ),
        spacing='1',
    )

# Text input box
def input_box(key: str, value: str, required: bool = False) -> rx.Component:
    return rx.vstack(
        rx.text.strong(key),
        rx.input(
            default_value=value,
            name=key,
            required=required,
            size='3',
            style={'width': '100%'},
        ),
        rx.spacer(),
        spacing='1',
    )

def calendar(key: str, value: str) -> rx.Component:
    return rx.vstack(
        rx.text.strong(key),
        rx.input(
            default_value=value,
            name=key,
            type='date',
            style={'width': '100%'},
        ),
        rx.spacer(),
        spacing='1',
    )
    
# On/off switch
def switch(key: str, value) -> rx.Component:
    return rx.hstack(
        rx.text.strong(key),
        rx.cond(
            value,
            rx.switch(
                default_checked=True,
                name=key,
                type='switch',
            ),
            rx.switch(
                default_checked=False,
                name=key,
                type='switch',
            ),
        ),
        rx.spacer(),
        spacing='3',
        align='center'
    )

# Selectbox from designated options
def selectbox(options: list[str], key: str, value: str, required: bool = False) -> rx.Component:
    return rx.vstack(
        rx.text.strong(key),
        rx.select(
            options,
            default_value=value,
            name=key,
            required=required,
            position='popper',
            size='3',
            style={'width': '100%'},
        ),
        rx.spacer(),
        spacing='1',
    ) 
    
# Photo/file upload
def file_upload(key: str, value: int) -> rx.Component:
    return rx.vstack(
        rx.text(f"{key}: {value}")
    )
    
class PhotoViewState(rx.State):
    file_ids: list[int] = []

    def view_image(file_id: int) -> str:
        # Assuming dbi.get_image(file_id) returns a URL or base64 string for the image
        return dbi.get_image(file_id)

def photo_view(key: str, value: list[int]):
    return rx.vstack(
        rx.text.strong(key),
        rx.hstack(
            rx.foreach(
                value[:3],  # Use a lambda to correctly reference the list
                lambda img_id: 
                    rx.image(
                        src=PhotoViewState.view_image(img_id),
                        style={"width": "50px", "margin": "5px"}  # Adjust as needed
                    )
            )
        )
    )
    
class MultiSelectState(rx.State):
    open_menu: bool = False
    selected_items: list[str] = []
    
    def toggle_menu(self):
        if self.open_menu:
            self.open_menu = False
        else:
            self.open_menu = True
    
    def toggle_item(self, item):
        if item in self.selected_items:
            self.selected_items.remove(item)
        else:
            self.selected_items.append(item)

def multi_select(items: list[str], tags: list[str]) -> rx.Component:
    return rx.vstack(
        rx.button("Select", on_click=MultiSelectState.toggle_menu()),
        rx.cond(
            MultiSelectState.open_menu,
            rx.vstack(
                *[
                    rx.checkbox(
                        item,
                        name=item,
                        default_checked=tags.contains(item),
                        size='3',
                    ) for item in items
                ]
            ),
        ),
        name='menu',
    )

# async def upload_file(self, files: list[rx.UploadFile]):
#     for file in files:
#         upload_data = await file.read()
#         outfile = rx.get_upload_dir() / file.filename

#         with outfile.open("wb") as file_object:
#             file_object.write(upload_data)

#         self.img.append(file.filename)
#         print(file.filename)

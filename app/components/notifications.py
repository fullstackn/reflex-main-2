import reflex as rx
from bson import ObjectId

from app.tools import db_interact as dbi

class NotificationState(rx.State):
    user: str = 'Colin'
    
    @rx.var
    def data(self) -> list[dict[str, str]]: 
        return dbi.get_documents('notifications', {'User': self.user})
    
    @rx.var
    def count(self) -> int:
        return len(self.data)
    
    def mark_as_read(self, notification_id: str):
        dbi.update_document('notifications', {'_id': ObjectId(notification_id)}, {'Read': True})
    
    
def notifications() -> rx.Component:
    return rx.menu.root(
        rx.menu.trigger(
            rx.hstack(
                rx.button(
                    rx.icon(tag="inbox", size=30),
                    rx.box(
                        rx.text(NotificationState.count),
                        background_color='red',
                        border_radius='5px',
                        padding_left="3px",
                        padding_right='3px',
                        font_size='12px',
                        margin_left = '-15px',
                        margin_top = '-20px'
                    ),
                    variant='ghost',
                ),
                spacing='0',
            ),
        ),
        rx.menu.content(
            rx.cond(
                NotificationState.data,
                rx.vstack(
                    rx.foreach(
                        NotificationState.data,
                        lambda notification: 
                            rx.card(
                                rx.button(
                                    rx.vstack(
                                        rx.text.strong(notification['Description']), 
                                        rx.text(f"To: {NotificationState.user} on {notification['Date'][:10]}")
                                    ),
                                    on_click=NotificationState.mark_as_read(notification['_id']),
                                ),
                                as_child=True,
                                style={'height': 'auto', 'width': '300px'},
                            ),
                    ),
                    spacing='1',
                ),
            )
        ),
        justify="end",
    ),

import reflex as rx

from app.tools.db_interact import get_documents
from app.components import lightbox as lb

def complaint_card(complaint: dict[str, str]) -> rx.Component:
    return rx.box(
        lb.editing_lightbox(),
        lb.viewing_lightbox(),
        rx.card(
            rx.button(
                rx.vstack(
                    rx.text.strong(f"#{complaint['_id']} {complaint['Subject']}", style={'font-size': '1.5em'}),
                    rx.hstack(
                        rx.text(f"Created: {complaint['Upload Date'][:8]} by {complaint['Created By']}"),
                        rx.spacer(),
                        rx.text(f"Priority: {complaint['Priority']}"),
                        style={'width': '100%'},
                    ),
                    spacing='1',
                ),
                on_click=lb.ViewingState.open_box('complaints', complaint),
                style={'width': '100%'},
            ),
            size='5',
            as_child=True,
            style={'padding': '8%', 'height': 'auto', 'width': '390px'}
        )
    )

import reflex as rx

from app.components import data_table as dt
import app.tools.db_interact as dbi

class AssociatesState(rx.State):
    async def activate(self):
        (await self.get_state(dt.TableState)).get_data('associates')


def associates() -> rx.Component:
    return rx.vstack(
        dt.data_table('associates'),

        align="center",
        justify="center",
        style={"width": "100%"}
    )

import reflex as rx

class OfficeExpensesState(rx.State):
    """The app state."""

    ...


def office_expenses() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "Office Expenses",
            size="8",
        ),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.card(
            rx.vstack(
                rx.heading(
                    "Description",
                    size="4"
                ),
                rx.text("This page will work like an accounting book for any office expenses. Purchases can be logged here to keep track of things bought by them team for the office or even recurring expenses such as rent."),
                justify="center",
                align="center",
            ),
            width="40%"
        ),
        rx.card(
            rx.vstack(
                rx.heading(
                    "Rank",
                    size="4"
                ),
                rx.text("5/10"),
                justify="center",
                align="center"
            ),
        ),
        rx.card(
            rx.vstack(
                rx.heading(
                    "Priority",
                    size="4"
                ),
                rx.text("Low"),
                justify="center",
                align="center"
            ),
        ),
        align="center",
        justify="center"
    )

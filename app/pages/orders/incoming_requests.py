import reflex as rx

class IncomingRequestsState(rx.State):
    """The app state."""

    ...


def incoming_requests() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "Incoming Requests",
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
                rx.text("This page will hold any incoming client item requests. The goal is to eventually have clients be able to fill out a form that submits requests directly to this page (but that's down the line). The necessary users will be able to create requests and assign them to the shopping list of the appropriate shopper manually from here. Once a request is assigned to a shopper's list, it will leave this page and appear in the next page of the sequence - the Shopping List page."),
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
                rx.text("8/10"),
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
                rx.text("High"),
                justify="center",
                align="center"
            ),
        ),
        align="center",
        justify="center"
    )

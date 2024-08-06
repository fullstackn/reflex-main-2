import reflex as rx

class OrderFulfillmentState(rx.State):
    """The app state."""

    ...


def order_fulfillment() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "Order Fulfillment",
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
                rx.text("This is the last page in the Order sequence. Once an item is ordered all the order fulfillment steps will be handled here. On this page, the appropriate user will be able to see incoming shipments, tracking info, client info, etc. Ultimately this page should have a feature for a user to auto-generate and print a FedEx shipping label with the proper information (down the road)."),
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
                rx.text("9/10"),
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

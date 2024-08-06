import reflex as rx

class ShoppingListState(rx.State):
    """The app state."""

    ...


def shopping_list() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "Shopping List",
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
                rx.text("This is the list for personal shoppers to see the requests assigned to them. Each request will clearly state every necessary detail about the item and client for the shopper to begin their item hunt. Shoppers will only be able to see requests assigned to them along with public requests which are availlable to all shoppers (only once 30 days have passed since the request creation). Once an item is found, the request record will instruct the shopper as to how to purchase and ship. Once request is completed, the database updates accordingly and the record leaves this page and prgressed to the Order Fulfillment page."),
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

import reflex as rx

class AnalyticsState(rx.State):
    """The app state."""

    ...


def analytics() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "Analytics/Reporting",
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
                rx.text("This page utilizes all data involved with every aspect of the CRM. Here you will be able to view a breakdown of absolutely any combination of data we have. All datapoints can be sorted, filtered, columns rearranged, lists exported, times isolated, etc. Admins will be able to see any and all data created by any user. Lower level users will be able to see data that pertains to them. Shoppers will be able to analyze their purchases, sales, commissions, etc. using this page."),
                justify="center",
                align="center",
            ),
            width="30%"
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

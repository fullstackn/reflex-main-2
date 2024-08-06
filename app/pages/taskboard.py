import reflex as rx

class TaskboardState(rx.State):
    values: list[dict] = [
        {
            "id": 1,
            "subject": "Example 1",
            "assignee": "user1",
            "due_date_time": "2023-01-01T10:00:00",
            "status": "not started",
            "description": "Detailed description of task 1"
        },
        {
            "id": 2,
            "subject": "Example 2",
            "assignee": "user2",
            "due_date_time": "2023-01-02T11:00:00",
            "status": "in progress",
            "description": "Detailed description of task 2"
        },
        {
            "id": 3,
            "subject": "Example 3",
            "assignee": "user3",
            "due_date_time": "2023-01-03T12:00:00",
            "status": "done",
            "description": "Detailed description of task 3"
        },
        {
            "id": 4,
            "subject": "Example 4",
            "assignee": "user4",
            "due_date_time": "2023-01-04T13:00:00",
            "status": "not started",
            "description": "Detailed description of task 4"
        },
        {
            "id": 5,
            "subject": "Example 5",
            "assignee": "user5",
            "due_date_time": "2023-01-05T14:00:00",
            "status": "in progress",
            "description": "Detailed description of task 5"
        },
        {
            "id": 6,
            "subject": "Example 6",
            "assignee": "user6",
            "due_date_time": "2023-01-06T15:00:00",
            "status": "done",
            "description": "Detailed description of task 6"
        },
        {
            "id": 7,
            "subject": "Example 7",
            "assignee": "user7",
            "due_date_time": "2023-01-07T16:00:00",
            "status": "not started",
            "description": "Detailed description of task 7"
        },
        {
            "id": 8,
            "subject": "Example 8",
            "assignee": "user8",
            "due_date_time": "2023-01-08T17:00:00",
            "status": "in progress",
            "description": "Detailed description of task 8"
        },
        {
            "id": 9,
            "subject": "Example 9",
            "assignee": "user9",
            "due_date_time": "2023-01-09T18:00:00",
            "status": "done",
            "description": "Detailed description of task 9"
        },
        {
            "id": 10,
            "subject": "Example 10",
            "assignee": "user10",
            "due_date_time": "2023-01-10T19:00:00",
            "status": "not started",
            "description": "Detailed description of task 10"
        },
        {
            "id": 11,
            "subject": "Example 11",
            "assignee": "user11",
            "due_date_time": "2023-01-11T20:00:00",
            "status": "in progress",
            "description": "Detailed description of task 11"
        },
        {
            "id": 12,
            "subject": "Example 12",
            "assignee": "user12",
            "due_date_time": "2023-01-12T21:00:00",
            "status": "done",
            "description": "Detailed description of task 12"
        },
        {
            "id": 13,
            "subject": "Example 13",
            "assignee": "user13",
            "due_date_time": "2023-01-13T22:00:00",
            "status": "in progress",
            "description": "Detailed description of task 13"
        }
    ]

    drawer_state: bool = False

    clicked_id: int = None
    clicked_subject: str = None
    clicked_assignee: str = None
    clicked_due_date_time: str = None
    clicked_status: str = None
    clicked_description: str = None

    def open_drawer(self, item: dict):
        self.drawer_state = True
        self.clicked_id = item["id"]
        self.clicked_subject = item["subject"]
        self.clicked_assignee = item["assignee"]
        self.clicked_due_date_time = item["due_date_time"]
        self.clicked_status = item["status"]
        self.clicked_description = item["description"]
        
    def close_drawer(self):
        self.drawer_state = False

    @rx.var
    def not_started_tasks(self) -> list[dict]:
        return [task for task in self.values if task["status"] == "not started"]

    @rx.var
    def in_progress_tasks(self) -> list[dict]:
        return [task for task in self.values if task["status"] == "in progress"]

    @rx.var
    def done_tasks(self) -> list[dict]:
        return [task for task in self.values if task["status"] == "done"]

def taskboard() -> rx.Component:
    return rx.vstack(
        rx.box(
            rx.heading(
                "Taskboard",
                size="8",
                text_align="center",
            ),
            width="100%",
            text_align="center",
        ),
        rx.grid(
            rx.vstack(
                rx.heading("Not Started", size="6"),
                rx.foreach(
                    TaskboardState.not_started_tasks,
                    lambda item: create_task_card(item),
                ),
                spacing="2",
            ),
            rx.vstack(
                rx.heading("In Progress", size="6"),
                rx.foreach(
                    TaskboardState.in_progress_tasks,
                    lambda item: create_task_card(item),
                ),
                spacing="2",
            ),
            rx.vstack(
                rx.heading("Done", size="6"),
                rx.foreach(
                    TaskboardState.done_tasks,
                    lambda item: create_task_card(item),
                ),
                spacing="2",
            ),
            columns="3",
            spacing="8",
            width="100%",
        ),
        card_drawer(),
    )

def create_task_card(item: list) -> rx.Component:
    return rx.card(
        rx.link(
            rx.flex(
                # rx.avatar(src="/reflex_banner.png"),
                rx.box(
                    rx.heading(item["subject"]),
                    rx.text(f"Assignee: {item['assignee']}"),
                ),
                spacing="2",
            ),
            on_click=TaskboardState.open_drawer(item),
        ),
        as_child=True,
    )

def card_drawer() -> rx.Component:
    return rx.drawer.root(
        rx.drawer.overlay(z_index="5"),
        rx.drawer.portal(
            rx.drawer.content(
                rx.flex(
                    rx.button("Close", on_click=TaskboardState.close_drawer, margin_bottom="8px"),
                    rx.text(f"Subject: {TaskboardState.clicked_subject}", size='5', weight='bold', margin_bottom="8px", color="black"),
                    rx.text(f"Assignee: {TaskboardState.clicked_assignee}", size='5', weight='bold', margin_bottom="8px", color="black"),
                    rx.text(f"Due Date: {TaskboardState.clicked_due_date_time}", size='5', weight='bold', margin_bottom="8px", color="black"),
                    rx.text(f"Status: {TaskboardState.clicked_status}", size='5', weight='bold', margin_bottom="8px", color="black"),
                    rx.text(f"Description: {TaskboardState.clicked_description}", size='5', weight='bold', margin_bottom="8px", color="black"),
                    align_items="start",
                    direction="column",
                ),
                top="auto",
                left="auto",
                height="100%",
                width="20em",
                padding="2em",
                background_color="#FFF"
            )
        ),
        open=TaskboardState.drawer_state,
        direction="right",
    )
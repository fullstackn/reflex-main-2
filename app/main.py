import reflex as rx
import os
import importlib

from app.components.notifications import notifications
from app.components.data_table import TableState

pages_dir = "app/pages"
page_modules = {}
dropdowns = {}

for item in os.listdir(pages_dir):
    item_path = os.path.join(pages_dir, item)
    if os.path.isfile(item_path) and item.endswith(".py") and item != "__init__.py":
        module_name = item[:-3]
        module = importlib.import_module(f"app.pages.{module_name}")
        page_modules[module_name] = module
    elif os.path.isdir(item_path) and item != "__pycache__":
        dropdowns[item] = {}
        for sub_item in os.listdir(item_path):
            if sub_item.endswith(".py") and sub_item != "__init__.py":
                sub_module_name = sub_item[:-3]
                module = importlib.import_module(f"app.pages.{item}.{sub_module_name}")
                dropdowns[item][sub_module_name] = module

class PageState(rx.State):  
    active_tab: str = list(page_modules.keys())[0] if page_modules else list(dropdowns.keys())[0]
    active_tab_variants: dict[str, str] = {module_name: "none" for module_name in page_modules}
    for dropdown in dropdowns:
        for sub_module in dropdowns[dropdown]:
            active_tab_variants[sub_module] = "none"
    active_tab_variants[active_tab] = "underline"

    async def set_active_tab(self, tab_name: str):
        self.active_tab = tab_name
        for tab in self.active_tab_variants:
            self.active_tab_variants[tab] = "underline" if tab == tab_name else "none"
        
        # Dynamically get the state class and call the activate method
        state_class_name = ''.join([part.capitalize() for part in tab_name.split('_')]) + "State"
        state_module = page_modules.get(tab_name) or next((dropdowns[dropdown][tab_name] for dropdown in dropdowns if tab_name in dropdowns[dropdown]), None)
        if state_module:
            state_class = getattr(state_module, state_class_name, None)
            if state_class:
                state_instance = await self.get_state(state_class)
                if hasattr(state_instance, 'activate'):
                    await state_instance.activate()
        
        # (await self.get_state(TableState)).get_data(tab_name)

def main() -> rx.Component:
    nav_links = []
    conditions = []

    for module_name, module in page_modules.items():
        nav_links.append(
            rx.text(
                module_name.replace('_', ' ').title(),
                cursor="pointer",
                text_decoration=PageState.active_tab_variants[module_name],
                on_click=lambda name=module_name: PageState.set_active_tab(name),
                size="4",
                weight="medium",
                color_scheme="blue"
            )
        )
        conditions.append(
            rx.cond(
                PageState.active_tab == module_name,
                getattr(module, module_name)(),
            )
        )

    for dropdown_name, sub_modules in dropdowns.items():
        dropdown_items = []
        for sub_module_name, sub_module in sub_modules.items():
            dropdown_items.append(
                rx.menu.item(
                    sub_module_name.replace('_', ' ').title(),
                    on_click=lambda name=sub_module_name: PageState.set_active_tab(name)
                )
            )
            conditions.append(
                rx.cond(
                    PageState.active_tab == sub_module_name,
                    getattr(sub_module, sub_module_name)()
                )
            )
        nav_links.append(
            rx.menu.root(
                rx.menu.trigger(
                    rx.button(
                        rx.text(
                            dropdown_name.replace('_', ' ').title(),
                            size="4",
                            weight="medium",
                        ),
                        rx.icon("chevron-down"),
                        weight="medium",
                        variant="ghost",
                        size="3",
                    ),
                ),
                rx.menu.content(*dropdown_items),
            )
        )

    return rx.vstack(
        rx.box(
            rx.hstack(
                rx.hstack(
                    rx.heading(
                        "Coveted CRM", 
                        size="7",
                        color_scheme="blue"
                    ),
                    align_items="center",
                ),
                rx.spacer(),
                rx.hstack(
                    *nav_links,
                    spacing="5",
                ),
                rx.spacer(),
                notifications(),
                rx.menu.root(
                    rx.menu.trigger(
                        rx.icon_button(
                            rx.icon("user"),
                            size="2",
                            radius="full",
                            # color_scheme="black"
                        )
                    ),
                    rx.menu.content(
                        rx.menu.item(
                            "Settings",
                        ),
                        rx.menu.separator(),
                        rx.menu.item(
                            "Log out",
                            color_scheme="red"
                        ),
                    ),
                    justify="end",
                ),
                justify="between",
                align_items="center",
            ),
            border_color="black",
            border_width="2px",
            border_radius="10px",
            padding="10px",
            width="100%",
        ),
        *conditions,
        padding="10px",
        align="center",
        justify="center"
    )

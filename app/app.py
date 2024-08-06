import reflex as rx
import app.main as mn
# import app.tools.db_interact as db_interact

class LoginState(rx.State):

    user: str = ""
    email: str = ""
    password: str = ""
    
    pass_error: bool = False
    user_error: bool = False
    
    logged_in: bool = False

    # Logs in by checking the username and password
    def sign_in(self, form_data: dict):
        
        self.user = form_data['_id']
        self.password = form_data['password']
        
        user_list = {} # db_interact.get_collection('users')
        
        # Login logic
        temp_user = user_list.find_one({'username': self.user})
        if temp_user:
            if temp_user['password'] == self.password:
                self.email = temp_user['email']
                self.logged_in = True
            else:
                self.pass_error = True
        else:
            self.user_error = True

    def logout(self):
        self.user = ""
        self.password = ""
        self.error_message = ""
        self.user_error = False
        self.pass_error = False

def login() -> rx.Component:
    return rx.card(
        rx.form.root(
            rx.vstack(
                rx.center(
                    rx.image(
                        src="/logo.jpg",
                        width="2.5em",
                        height="auto",
                        border_radius="25%",
                    ),
                    rx.heading(
                        "Sign in to your account",
                        size="6",
                        as_="h2",
                        text_align="center",
                        width="100%",
                    ),
                    direction="column",
                    spacing="5",
                    width="100%",
                ),
                rx.vstack(
                    rx.text(
                        "Username",
                        size="3",
                        weight="medium",
                        text_align="left",
                        width="100%",
                    ),
                    rx.input(
                        placeholder="Enter your username",
                        name='username',
                        size="3",
                        width="100%",
                    ),
                    justify="start",
                    spacing="2",
                    width="100%",
                ),
                rx.vstack(
                    rx.hstack(
                        rx.text(
                            "Password",
                            size="3",
                            weight="medium",
                        ),
                        justify="between",
                        width="100%",
                    ),
                    rx.input(
                        placeholder="Enter your password",
                        name="password",
                        type="password",
                        size="3",
                        width="100%",
                    ),
                    spacing="2",
                    width="100%",
                ),
                rx.button("Sign in", size="3", width="100%", type='submit'),
                rx.cond(
                    LoginState.user_error,
                    rx.callout(
                        "Username not found",
                        color_scheme='red',
                        icon='x',
                        width='100%'
                    ),
                ),
                rx.cond(
                    LoginState.pass_error,
                    rx.callout(
                        "Incorrect password",
                        color_scheme='red',
                        icon='x',
                        width='100%'
                    ),
                ),
                spacing="6",
                width="100%",
            ),
            on_submit=LoginState.sign_in(),
            size="4",
            max_width="28em",
            width="100%",
        ),
        max_width="28em",
        width="100%",
        size='4',
    )

def index() -> rx.Component:
    return rx.cond(
        # login temporarily skipped for testing purposes
        LoginState.user != "",
        login(),
        mn.main()
    )

app = rx.App()
app.add_page(index)

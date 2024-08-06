import reflex as rx

from app.components.form_fields import *
import app.tools.db_interact as dbi

class FormState(rx.State):
    document: dict[str, str] = {}
    data_type: str = ""
    references: dict[str, str] = {}  # Dictionary to store resolved reference names
    formatted_lists: dict[str, str] = {}

    def get_form(self, doc: dict, dtype: str):
        self.document = doc
        self.data_type = dtype
        self.update_references()
        self.format_lists()
        
        print(doc)
        
    def update_references(self):
        """Fetch and update the values for all references in the document."""
        references_to_fetch = {
            'Assigned Team Member': ('users', 'Username'),
            'Associates': ('associates', 'Name'),
            'Brand': ('brands', 'Name'),
            'Brands': ('brands', 'Name'),
            'Profile': ('profiles', 'Name'),
            'Product': ('products', 'Name'),
            'Retailer': ('retailers', 'Name'),
            'Retailers': ('retailers', 'Name'),
            'Selling Associate': ('associates', 'Name'),
            'Shopper': ('users', 'Username'),
        }
        for doc_key, (collection, ref_key) in references_to_fetch.items():
            self.references[doc_key] = self.get_reference(collection, doc_key, ref_key)
            
        print(self.references)

    def get_reference(self, collection: str, doc_key: str, ref_key: str) -> any:
        """Fetch a reference value based on a document key, handles lists of IDs."""
        try:
            if isinstance(self.document.get(doc_key), list):
                # Handle list of IDs
                ids = [int(id) for id in self.document.get(doc_key, [])]
                names = []
                for ref_id in ids:
                    ref_doc = dbi.db[collection].find_one({'_id': ref_id})
                    names.append(ref_doc[ref_key] if ref_doc else "Unknown")
                return ', '.join(names)
            else:
                # Handle single ID
                ref_id = int(self.document.get(doc_key, 0))
                ref_doc = dbi.db[collection].find_one({'_id': ref_id})
                return ref_doc[ref_key] if ref_doc else "Unknown"
        except (ValueError, TypeError):
            return "Unknown"
        
    def format_lists(self):
        """Format all lists in the document according to their type."""
        lists_to_format = {
            'Items': 'items',
            'Purchased Items': 'items',
        }
        for doc_key, collection in lists_to_format.items():
            self.formatted_lists[doc_key] = self.get_format(collection, doc_key)

    def get_format(self, collection: str, doc_key: str) -> str:
        """Format list of items with a prefix derived from the collection name."""
        prefix = collection[0].upper() + "-"
        items_list = self.document.get(doc_key, [])
        formatted_items = [f"{prefix}{item_id}" for item_id in items_list]
        return ', '.join(formatted_items)
        

def view_form() -> rx.Component:
    return rx.vstack(
        rx.match(
            FormState.data_type,
            ('associates', view_associate()),
            ('brands', view_brand()),
            ('complaints', view_complaint()),
            ('clients', view_client()),
            ('expenses', view_expense()),
            ('items', view_item()),
            ('products', view_product()),
            ('profiles', view_profile()),
            ('requests', view_request()),
            ('retailers', view_retailer()),
        ),
        style={'width': '100%'},
    )
    
def edit_form() -> rx.Component:
    return rx.vstack(
        rx.match(
            FormState.data_type,
            ('associates', edit_associate()),
            ('brands', edit_brand()),
            ('complaints', edit_complaint()),
            ('clients', edit_client()),
            ('expenses', edit_expense()),
            ('items', edit_item()),
            ('products', edit_product()),
            ('profiles', edit_profile()),
            ('requests', edit_request()),
            ('retailers', edit_retailer()),
        ),
        style={'width': '100%'},
    )

def view_associate() -> rx.Component:
    return rx.grid(
        text_box('Name', FormState.document['Name']),
        text_box('Phone', FormState.document['Phone']),
        text_box('Email', FormState.document['Email']),
        text_box('Preferred Contact Method', FormState.document['Preferred Contact Method']),
        text_box('Location', FormState.document['Location']),
        text_box('Profile', FormState.references['Profile']),
        text_box('Retailer', FormState.references['Retailer']),
        text_box('Items', FormState.formatted_lists['Items']),
        text_box('Upload Date', FormState.document['Upload Date']),
        text_box('Last Edit Date', FormState.document['Last Edit Date']),
        text_box('Created By', FormState.document['Created By']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def edit_associate() -> rx.Component:
    return rx.grid(
        input_box('Name', FormState.document['Name'], required=True),
        input_box('Phone', FormState.document['Phone']),
        input_box('Email', FormState.document['Email']),
        selectbox(['Phone', 'Email'], 'Preferred Contact Method', FormState.document['Preferred Contact Method']),
        input_box('Location', FormState.document['Location'], required=True),
        selectbox([entry['Name'] for entry in dbi.get_documents('profiles')], 'Profile', FormState.references['Profile']),
        selectbox([entry['Name'] for entry in dbi.get_documents('retailers')], 'Retailer', FormState.references['Retailer'], required=True),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )

def view_brand() -> rx.Component:
    return rx.grid(
        text_box('Name', FormState.document['Name']),
        text_box('Upload Date', FormState.document['Upload Date']),
        text_box('Last Edit Date', FormState.document['Last Edit Date']),
        text_box('Created By', FormState.document['Created By']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )

def edit_brand() -> rx.Component:
    return rx.grid(
        input_box('Name', FormState.document['Name']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def view_client() -> rx.Component:
    return rx.grid(
        text_box('Name', FormState.document['Name']),
        text_box('Credit Card #', FormState.document['Credit Card #']),
        text_box('Phone', FormState.document['Phone']),
        text_box('Expiration', FormState.document['Expiration']),
        text_box('Email', FormState.document['Email']),
        text_box('CVV', FormState.document['CVV']),
        text_box('Instagram', FormState.document['Instagram']),
        text_box('Shipping Address', FormState.document['Instagram']),
        text_box('Upload Date', FormState.document['Upload Date']),
        text_box('Last Edit Date', FormState.document['Last Edit Date']),
        text_box('Created By', FormState.document['Created By']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )

def edit_client() -> rx.Component:
    return rx.grid(
        input_box('Name', FormState.document['Name']),
        input_box('Credit Card #', FormState.document['Credit Card #']),
        input_box('Phone', FormState.document['Phone']),
        input_box('Expiration', FormState.document['Expiration']),
        input_box('Email', FormState.document['Email']),
        input_box('CVV', FormState.document['CVV']),
        input_box('Instagram', FormState.document['Instagram']),
        input_box('Shipping Address', FormState.document['Instagram']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def view_complaint() -> rx.Component:
    return rx.grid(
        text_box('Subject', FormState.document['Subject']),
        text_box('Details', FormState.document['Details']),
        text_box('Priority', FormState.document['Priority']),
        text_box('Status', FormState.document['Status']),
        text_box('Assigned Team Member', FormState.document['Assigned Team Member']),
        text_box('Upload Date', FormState.document['Upload Date']),
        text_box('Last Edit Date', FormState.document['Last Edit Date']),
        text_box('Created By', FormState.document['Created By']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def edit_complaint() -> rx.Component:
    return rx.grid(
        input_box('Subject', FormState.document['Subject'], required=True),
        input_box('Details', FormState.document['Details'], required=True),
        selectbox(['High', 'Medium', 'Low'], 'Priority', FormState.document['Priority'], required=True),
        selectbox(['New', 'In Progress', 'Resolved'], 'Status', FormState.document['Status'], required=True),
        selectbox([entry['_id'] for entry in dbi.get_documents('users')], 'Assigned Team Member', FormState.references['Assigned Team Member'], required=True),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def view_expense() -> rx.Component:
    return rx.grid(
        text_box('Description', FormState.document['Description']),
        text_box('Price', FormState.document['Price']),
        text_box('Date', FormState.document['Date']),
        text_box('Credit Card Used', FormState.document['Credit Card Used']),
        text_box('Upload Date', FormState.document['Upload Date']),
        text_box('Last Edit Date', FormState.document['Last Edit Date']),
        text_box('Created By', FormState.document['Created By']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def edit_expense() -> rx.Component:
    return rx.grid(
        input_box('Description', FormState.document['Description']),
        input_box('Price', FormState.document['Price']),
        calendar('Date', FormState.document['Date']),
        input_box('Credit Card Used', FormState.document['Credit Card Used']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def view_item() -> rx.Component:
    return rx.grid(
        text_box('Retail Price', FormState.document['Retail Price']),
        text_box('Tracking Number', FormState.document['Tracking Number']),
        text_box('Date Purchased', FormState.document['Date Purchased']),
        text_box('Date Received', FormState.document['Date Received']),
        text_box('Status', FormState.document['Status']),
        text_box('Specs', FormState.document['Specs']),
        text_box('Profile', FormState.references['Profile']),
        text_box('Product', FormState.references['Product']),
        text_box('Selling Associate', FormState.references['Selling Associate']),
        text_box('Request', f"R-{FormState.document['Request']}"),
        text_box('Upload Date', FormState.document['Upload Date']),
        text_box('Last Edit Date', FormState.document['Last Edit Date']),
        text_box('Created By', FormState.document['Created By']),
        file_download('Photos', FormState.document['Photos']),
        # photo_view('Photos', FormState.document['Photos']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def edit_item() -> rx.Component:
    return rx.grid(
        input_box('Retail Price', FormState.document['Retail Price']),
        input_box('Tracking Number', FormState.document['Tracking Number']),
        calendar('Date Purchased', FormState.document['Date Purchased']),
        calendar('Date Received', FormState.document['Date Received']),
        selectbox(
            ['Hunting', 'Located', 'Ordered to Client', 'Ordered to Office', 'In Inventory', 'Shipped from Office to Client', 'Received by Client', 'Returned'], 
            'Status', FormState.document['Status']
        ),
        text_box('Specs', FormState.document['Specs']),
        selectbox([entry['Name'] for entry in dbi.get_documents('profiles')], 'Profile', FormState.references['Profile']),
        selectbox([entry['Name'] for entry in dbi.get_documents('products')], 'Product', FormState.references['Product'], required=True),
        selectbox([entry['Name'] for entry in dbi.get_documents('associates')], 'Selling Associate', FormState.references['Selling Associate']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def view_product() -> rx.Component:
    return rx.grid(
        text_box('Name', FormState.document['Name']),
        text_box('Items', FormState.formatted_lists['Items']),
        text_box('Brand', FormState.references['Brand']),
        text_box('Upload Date', FormState.document['Upload Date']),
        text_box('Last Edit Date', FormState.document['Last Edit Date']),
        text_box('Created By', FormState.document['Created By']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def edit_product() -> rx.Component:
    return rx.grid(
        input_box('Name', FormState.document['Name'], required=True),
        selectbox([entry['Name'] for entry in dbi.get_documents('brands')], 'Brand', FormState.references['Brand'], required=True),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
        
def view_profile() -> rx.Component:
    return rx.grid(
        text_box('Name', FormState.document['Name']),
        text_box('Credit Card #', FormState.document['Credit Card #']),
        text_box('Shipping Address', FormState.document['Shipping Address']),
        text_box('Expiration', FormState.document['Expiration']),
        text_box('Phone', FormState.document['Phone']),
        text_box('CVV', FormState.document['CVV']),
        text_box('Email', FormState.document['Email']),
        text_box('Preferred Contact Method', FormState.document['Preferred Contact Method']),
        text_box('Status', FormState.document['Status']),
        text_box('Sizes', FormState.document['Sizes']),
        text_box('Retailers', FormState.references['Retailers']),
        text_box('Purchased Items', FormState.formatted_lists['Purchased Items']),
        text_box('Upload Date', FormState.document['Upload Date']),
        text_box('Last Edit Date', FormState.document['Last Edit Date']),
        text_box('Created By', FormState.document['Created By']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def edit_profile() -> rx.Component:
    return rx.grid(
        input_box('Name', FormState.document['Name']),
        input_box('Credit Card #', FormState.document['Credit Card #']),
        input_box('Shipping Address', FormState.document['Shipping Address']),
        input_box('Expiration', FormState.document['Expiration']),
        input_box('Phone', FormState.document['Phone']),
        input_box('CVV', FormState.document['CVV']),
        input_box('Email', FormState.document['Email']),
        selectbox(['Phone', 'Email'], 'Preferred Contact Method', FormState.document['Preferred Contact Method']),
        input_box('Status', FormState.document['Status']),
        text_box('Sizes', FormState.document['Sizes']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def view_request() -> rx.Component:
    return rx.grid(
        text_box('Preferred Shipment Method', FormState.document['Preferred Shipment Method']),
        text_box('Deadline', FormState.document['Deadline']),
        text_box('Paid For?', FormState.document['Paid For?']),
        text_box('Client', FormState.document['Client']),
        text_box('Item', FormState.document['Item']),
        text_box('Shopper', FormState.document['Shopper']),
        text_box('Upload Date', FormState.document['Upload Date']),
        text_box('Last Edit Date', FormState.document['Last Edit Date']),
        text_box('Created By', FormState.document['Created By']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def edit_request() -> rx.Component:
    return rx.grid(
        selectbox(['Dropship', 'Ship to Company'], 'Preferred Shipment Method', FormState.document['Preferred Shipment Method']),
        calendar('Deadline', FormState.document['Deadline']),
        switch('Paid For?', FormState.document['Paid For?']),
        selectbox([user['_id'] for user in dbi.get_documents('users')], 'Shopper', FormState.references['Shopper']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def view_retailer() -> rx.Component:
    return rx.grid(
        text_box('Name', FormState.document['Name']),
        text_box('Buy Books', FormState.document['Buy Books']),
        text_box('Associates', FormState.references['Associates']),
        text_box('Brands', FormState.references['Brands']),
        text_box('Items', FormState.formatted_lists['Items']),
        text_box('Upload Date', FormState.document['Upload Date']),
        text_box('Last Edit Date', FormState.document['Last Edit Date']),
        text_box('Created By', FormState.document['Created By']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
    
def edit_retailer() -> rx.Component:
    return rx.grid(
        input_box('Name', FormState.document['Name']),
        file_upload('Buy Books', FormState.document['Buy Books']),
        columns='2',
        spacing='3',
        align='center',
        style={'width': '100%'},
    )
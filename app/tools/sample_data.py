import db_interact as dbi
from bson.objectid import ObjectId
from datetime import datetime

import pymongo
from pymongo.collection import Collection
from pymongo.mongo_client import MongoClient

cluster = MongoClient("mongodb+srv://colin:MooWD9I69LuuUJRN@maincluster.hmfgfha.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster")
db = cluster['Shop4Me']

myid = 'Colin'

associate = {
    'Name': 'Josh Heart',
    'Phone': '2539789724',
    'Email': 'josheart@heartstores.com',
    'Preferred Contact Method': 'Email',
    'Location': 'Heart Paris',
    'Profile': None,
    'Retailer': None,
    'Items': [],
    'Role Access': ['manager', 'scrub'],
    'Upload Date': datetime.now(),
    'Last Edit Date': datetime.now(),
    'Created By': myid,
}
brand = {
    'Name': 'Prada',
    'Products': [],
    'Upload Date': datetime.now(),
    'Last Edit Date': datetime.now(),
    'Created By': myid,
}
client = {
    'Name': 'James Richardson',
    'Phone': '2355684752',
    'Email': 'jrich@gmail.com',
    'Instagram': 'jmoneyrich',
    'Credit Card #': '3892785313095643',
    'Expiration': '09/31',
    'CVV': '568',
    'Shipping Address': '712 Paris Road',
    'Requests': [],
    'Received Items': [],
    'Role Access': ['manager', 'scrub'],
    'Upload Date': datetime.now(),
    'Last Edit Date': datetime.now(),
    'Created By': myid,
}
complaint = {
    'Client': None,
    'Request': None,
    'Subject': "Prada bag strap broke",
    'Details': 'The strap of my Prada bag is dying help me get a replacement',
    'Status': 'New',
    'Priority': 'Low',
    'Assigned Team Member': 'Chloe',
    'Role Access': ['manager', 'scrub'],
    'Upload Date': datetime.now(),
    'Last Edit Date': datetime.now(),
    'Created By': myid,
}
expense = {
    'Description': 'New Computer',
    'Price': '800',
    'Date': datetime(2024, 7, 29),
    'Credit Card Used': '7382539813675783',
    'Upload Date': datetime.now(),
    'Last Edit Date': datetime.now(),
    'Created By': myid,
}
item = {
    'Retail Price': '270',
    'Tracking Number': 'DH38FN47CN92NB',
    'Date Purchased': datetime(2024, 7, 11),
    'Date Received': datetime(2024, 7, 17),
    'Return Date': datetime(2024, 8, 11),
    'Status': 'Shipped from Office to Client',
    'Specs': {'Color': 'Black'},
    'Profile': None,
    'Product': None,
    'Selling Associate': None,
    'Request': None,
    'Possible Associates': [],
    'Photos': [],
    'Role Access': ['manager', 'scrub'],
    'Upload Date': datetime.now(),
    'Last Edit Date': datetime.now(),
    'Created By': myid,
}
notification = {
    'Description': "I can just make so many of them",
    'Read': False,
    'Date': datetime.now(),
    'User': myid,
    "Upload Date": datetime.now(),
    "Last Edit Date": datetime.now(),
    'Created By': myid,
}
product = {
    'Name': 'Black Prada Bag',
    'Items': [],
    'Brand': [],
    'Upload Date': datetime.now(),
    'Last Edit Date': datetime.now(),
    'Created By': myid,
}
profile = {
    'Name': 'Shmulio Jones',
    'Shipping Address': '12 West Q St.',
    'Phone': '2435672190',
    'Email': 'imshmulio@gmail.com',
    'Preferred Contact Method': 'Phone',
    'Credit Card #': '3893232678789433',
    'Expiration': '12/24',
    'CVV': '364',
    'Sizes': {},
    'Status': 'Average Client',
    'Retailers': [],
    'Purchased Items': [],
    'Role Access': ['manager', 'scrub'],
    'Upload Date': datetime.now(),
    'Last Edit Date': datetime.now(),
    'Created By': myid,
}
request = {
    'Preferred Shipment Method': 'Ship to Company',
    'Deadline': datetime(2024, 8, 11),
    'Shopper': 'Colin',
    'Paid For?': True,
    'Client': None,
    'Item': None,
    'Role Access': ['manager', 'scrub'],
    'Upload Date': datetime.now(),
    'Last Edit Date': datetime.now(),
    'Created By': myid,
}
retailer = {
    'Name': 'Heart Collections',
    'Buy Books': [],
    'Associates': [],
    'Brands': [],
    'Items': [],
    'Upload Date': datetime.now(),
    'Last Edit Date': datetime.now(),
    'Created By': myid,
}
task = {
    "Subject": "Task 3",
    "Description": "Make more tasks",
    "Status": "New",
    "Assignee": "Colin",
    "Role Tags": [],
    "Due Date": datetime(2024, 8, 3),
    "Upload Date": datetime.now(),
    "Last Edit Date": datetime.now(),
    'Created By': myid,
}
image = 'assets/uploaded_images/pradabag.webp'

new_associate = dbi.create_document('associates', associate)
new_brand = dbi.create_document('brands', brand)
new_client = dbi.create_document('clients', client)
new_complaint = dbi.create_document('complaints', complaint)
new_expense = dbi.create_document('expenses', expense)
new_item = dbi.create_document('items', item)
new_notification = dbi.create_document('notifications', notification)
new_product = dbi.create_document('products', product)
new_profile = dbi.create_document('profiles', profile)
new_request = dbi.create_document('requests', request)
new_retailer = dbi.create_document('retailers', retailer)
new_task = dbi.create_document('tasks', task)
new_image = dbi.upload_image(image)

db['associates'].update_one({'_id': new_associate.inserted_id}, {'$set': {'Profile': new_profile.inserted_id}})
db['associates'].update_one({'_id': new_associate.inserted_id}, {'$set': {'Retailer': new_retailer.inserted_id}})
db['associates'].update_one({'_id': new_associate.inserted_id}, {'$push': {'Items': new_item.inserted_id}})

db['brands'].update_one({'_id': new_brand.inserted_id}, {'$push': {'Products': new_product.inserted_id}})

db['clients'].update_one({'_id': new_client.inserted_id}, {'$push': {'Requests': new_request.inserted_id}}) 
db['clients'].update_one({'_id': new_client.inserted_id}, {'$push': {'Received Items': new_item.inserted_id}})

db['requests'].update_one({'_id': new_request.inserted_id}, {'$set': {'Client': new_client.inserted_id}})
db['requests'].update_one({'_id': new_request.inserted_id}, {'$set': {'Item': new_item.inserted_id}})

db['items'].update_one({'_id': new_item.inserted_id}, {'$set': {'Profile': new_profile.inserted_id}})
db['items'].update_one({'_id': new_item.inserted_id}, {'$set': {'Product': new_product.inserted_id}})
db['items'].update_one({'_id': new_item.inserted_id}, {'$set': {'Selling Associate': new_associate.inserted_id}})
db['items'].update_one({'_id': new_item.inserted_id}, {'$set': {'Request': new_request.inserted_id}})
db['items'].update_one({'_id': new_item.inserted_id}, {'$push': {'Possible Associates': new_associate.inserted_id}})
db['items'].update_one({'_id': new_item.inserted_id}, {'$push': {'Photos': new_image}})

db['products'].update_one({'_id': new_product.inserted_id}, {'$push': {'Items': new_item.inserted_id}})
db['products'].update_one({'_id': new_product.inserted_id}, {'$push': {'Brand': new_brand.inserted_id}})

db['profiles'].update_one({'_id': new_profile.inserted_id}, {'$push': {'Retailers': new_retailer.inserted_id}})
db['profiles'].update_one({'_id': new_profile.inserted_id}, {'$push': {'Purchased Items': new_item.inserted_id}})

db['retailers'].update_one({'_id': new_retailer.inserted_id}, {'$push': {'Associates': new_associate.inserted_id}})
db['retailers'].update_one({'_id': new_retailer.inserted_id}, {'$push': {'Brands': new_brand.inserted_id}})
db['retailers'].update_one({'_id': new_retailer.inserted_id}, {'$push': {'Items': new_item.inserted_id}})

db['complaints'].update_one({'_id': new_complaint.inserted_id}, {'$set': {'Client': new_client.inserted_id}})
db['complaints'].update_one({'_id': new_complaint.inserted_id}, {'$set': {'Request': new_request.inserted_id}})

print('Success!')
from pymongo.mongo_client import MongoClient
from gridfs import GridFS
import json
from PIL import Image
from io import BytesIO
from datetime import datetime

cluster = MongoClient(
    "mongodb+srv://frontback:Upwork123@maincluster.hmfgfha.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster",
    tlsAllowInvalidCertificates=True
)
db = cluster['Shop4Me']
fs = GridFS(db)

def convert_to_string_or_keep(value):
    if isinstance(value, list):
        return [convert_to_string_or_keep(item) for item in value]
    elif isinstance(value, dict):
        return json.dumps(value)  # Convert dict to a JSON string
    elif isinstance(value, (int, bool)):
        return value
    else:
        return str(value)
      
def get_counter(collection: str):
    """Get the next integer value from the counter collection."""
    counter: dict = db['counters'].find_one_and_update(
        {'_id': 0},
        {'$inc': {collection: 1}},
    )
    return counter[collection]

def get_documents(collection: str, criteria: dict = None):
    documents = db[collection].find(criteria)
    response = [{k: convert_to_string_or_keep(v) for k, v in doc.items()} for doc in documents]
    return response

def get_attribute(collection: str, attribute: str, criteria: dict = None):
    document = db[collection].find_one(criteria)
    return document[attribute]

def create_document(collection: str, document: dict):
    for key, value in document.items():
        if isinstance(value, datetime):
            document[key] = value.strftime("%m/%d/%y : %I:%M %p")

    document['_id'] = get_counter(collection)
    
    return db[collection].insert_one(document)

def update_document(collection: str, criteria: dict, update: dict):
    db[collection].find_one_and_update(criteria, {'$set': update})
    
def add_to_list(collection: str, criteria: dict, update: dict):
    db[collection].find_one_and_update(criteria, {'$push': update})

def delete_document(collection: str, criteria: dict):
    return db[collection].delete_one(criteria)

def upload_image(file_path):
    file_id = get_counter('files')
    with open(file_path, 'rb') as f:
        fs.put(f, filename=file_path, _id=file_id)
    return file_id
        
def get_image(img: int):
    grid_out = fs.get(img)
    image_data = grid_out.read()
    return Image.open(BytesIO(image_data))

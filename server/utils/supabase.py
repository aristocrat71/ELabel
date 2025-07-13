from decouple import config
from supabase import create_client
from io import BytesIO

def get_supabase_client():
    url = config("VITE_SUPABASE_URL")
    key = config("SUPABASE_SERVICE_ROLE_KEY")
    return create_client(url, key)

BUCKET_NAME = config("SUPABASE_BUCKET", default="images")

def upload_file_to_supabase(file_obj, file_name):
    """
    Uploads a file-like object to the Supabase bucket and returns the public URL.
    file_obj: InMemoryUploadedFile (from Django)
    file_name: path/name in the bucket (e.g., 'company_logos/logo1.png')
    """
    supabase = get_supabase_client()
    # Move the file pointer to the beginning
    file_obj.seek(0)
    # Read the file content as bytes
    file_bytes = file_obj.read()
    # Upload as bytes
    supabase.storage.from_(BUCKET_NAME).upload(file_name, file_bytes)
    public_url = supabase.storage.from_(BUCKET_NAME).get_public_url(file_name)
    return public_url 
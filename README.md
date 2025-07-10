# ELabel Backend (Django)

## Setup Instructions

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd ELabel
   ```
2. **Create and activate a virtual environment:**

   ```sh
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On Mac/Linux:
   source venv/bin/activate
   ```
3. **Install dependencies:**

   ```sh
   pip install -r requirements.txt
   ```
4. **Configure environment variables:**

   - Create a `.env` file in the `server` directory with your Supabase/Postgres and Django settings (see project docs).
5. **Apply migrations:**

   ```sh
   cd server
   python manage.py migrate
   ```
6. **Run the development server:**

   ```sh
   python manage.py runserver
   ```

---

## API Endpoints (for testing)

### **Authentication**

- **Register:** `POST /api/auth/register/`
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Login:** `POST /api/auth/login/`
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

  - Returns: `{ "access": "<token>", "refresh": "<token>" }`

### **Company Profiles**

- **List/Create:** `GET/POST /api/companyprofiles/`
- **Retrieve/Update/Delete:** `GET/PATCH/DELETE /api/companyprofiles/{id}/`

**Sample data for POST (form-data):**

| Key          | Value            |
| ------------ | ---------------- |
| user         | 1                |
| company_name | Test Company     |
| website      | https://test.com |
| ...          | ...              |

### **ELabels**

- **List/Create:** `GET/POST /api/elabels/`
- **Retrieve/Update/Delete:** `GET/PATCH/DELETE /api/elabels/{id}/`
- **Filter by company:** `GET /api/elabels/?company_profile={id}`

**Sample data for POST (form-data):**

| Key             | Value      |
| --------------- | ---------- |
| name            | Test Wine  |
| company_profile | 1          |
| user            | 1          |
| grape_variety   | Chardonnay |
| ...             | ...        |

**Note:** For file uploads (like `logo` or `image`), use `form-data` and set the type to File.

---

## Notes

- All protected endpoints require a JWT access token in the `Authorization` header:
  ```
  Authorization: Bearer <access_token>
  ```
- Only the logged-in user's data is accessible.
- Frontend is not included in this setup yet.

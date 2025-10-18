
# Lions Backend

## Installation

### Prerequisites
- Python 3.12
- SQLite (default database for now, no additional setup required)

### Setup
1. **Clone the repository**
   ```sh
   git clone <repository_url>
   cd lions_backend
   ```

2. **Create a virtual environment**
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```sh
   pip install -r requirements.txt
   ```

4. **Create local .env**
   ```
   Create .env file in backend (root) folder from .env.example and modify it
   ```

5. **Apply migrations**
   ```sh
   python manage.py migrate
   ```

6. **Create a superuser (optional, for admin access)**
   ```sh
   python manage.py createsuperuser
   ```

7. **Run the development server**
   ```sh
   python manage.py runserver
   ```

Now the backend should be running at `http://127.0.0.1:8000/`. 🚀

## Database Migrations

- If you make changes to the models, you need to create and apply migrations to update the database.

1. **Create migrations**
   ```sh
   python manage.py makemigrations
   ```

2. **Apply migrations**
   ```sh
   python manage.py migrate
   ```

This ensures your database schema is up-to-date with your model changes.

## Django Admin

- You can access it by navigating to `http://127.0.0.1:8000/admin` in your browser.
- Use the superuser credentials you created earlier to log in and manage your models through the admin interface.


## Deploy

To deploy new version you need to:
- Run manual job (release) in GitLab Pipeline in order to build and push new docker image to container registry
- SSH to DigitalOcean droplet (207.154.227.161) with SSH key, go to /root folder and run:
  - docker compose pull
  - docker compose up -d

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_cors import CORS

# Initialize extensions
db = SQLAlchemy()
bcrypt = Bcrypt()
login_manager = LoginManager()
login_manager.login_view = 'main.login'
migrate = Migrate()

def create_app():
    """
    Factory function to create a Flask application instance.
    Configures and initializes the app and its extensions.
    """
    app = Flask(__name__)

    #load configurations from config.py
    app.config.from_object('config.Config')

    # enable CORS for the specified origin
    CORS(app, resources={r"/*": {"origins": "http://localhost:5174"}})

    # initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    migrate.init_app(app, db)

    # Register blueprints
    from .routes import main
    app.register_blueprint(main)

    # Create database tables if they don't exist
    with app.app_context():
        db.create_all()

    return app
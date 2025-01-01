from app import create_app
from flask import Flask

app = create_app()

app = Flask(__name__)
#this is the entry point for the application. It creates an instance of the Flask application and runs it in debug mode.
if __name__ == '__main__':
    app.run(debug=True)
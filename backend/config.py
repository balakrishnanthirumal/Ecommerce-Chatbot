import os

class Config:
    #set secret key to use session in Flask
    SECRET_KEY = os.getenv('SECRET_KEY', 'supersecretkey')
    #set the database
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///ecommerce.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
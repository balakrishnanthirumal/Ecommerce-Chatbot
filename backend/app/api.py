from flask import Flask
from flask_restful import Resource, Api, reqparse, abort
from flask import  jsonify
from app.models import db, User, Product, Order, OrderItem, Category, Review
from . import bcrypt
from flask_login import login_user, current_user, logout_user, login_required
from datetime import datetime

app = Flask(__name__)
api = Api(app)

createUser_args = reqparse.RequestParser()
createUser_args.add_argument("username", type=str, help="username is required", required = True)
createUser_args.add_argument("email", type=str, help="username is required", required = True)
createUser_args.add_argument("password", type=str, help="username is required", required = True)


class createUser(Resource):
    def post(self):
        existing_user = User.query.filter_by(username=createUser_args["username"]).first()
        if existing_user:
            return jsonify({'message': 'Username already exists'}), 400

        hashed_password = bcrypt.generate_password_hash(createUser_args["password"]).decode('utf-8')

        new_user = User(
        username=createUser_args["username"],
        email = createUser_args["email"],
        password=hashed_password,
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow(),
        is_admin=False
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify(new_user)
        







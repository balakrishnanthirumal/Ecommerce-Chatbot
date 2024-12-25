from flask import Blueprint, jsonify, request
from .models import db, User, Product, Order, OrderItem, Category, Review
from . import bcrypt
from flask_login import login_user, current_user, logout_user, login_required
from datetime import datetime

main = Blueprint('main', __name__)

@main.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])

@main.route('/product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = Product.query.get_or_404(product_id)
    return jsonify(product.to_dict())

@main.route('/brand/<string:brand>', methods=['GET'])
def get_products_by_brand(brand):
    products = Product.query.filter_by(brand=brand).all()
    return jsonify([product.to_dict() for product in products])

@main.route('/top-products', methods=['GET'])
def get_top_products():
    products = Product.query.order_by(Product.rating.desc()).limit(10).all()
    return jsonify([product.to_dict() for product in products])

@main.route('/add-review/<int:product_id>', methods=['POST'])
def add_review(product_id):
    product = Product.query.get_or_404(product_id)
    data = request.get_json()
    review = Review(user_id=current_user.id, review=data['review'])
    product.review += 1
    db.session.add(review)
    db.session.commit()
    return jsonify({'message': 'Review added successfully'})

@main.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({'message': 'Username already exists'}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(
        username=username,
        password=hashed_password,
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow(),
        is_admin=False
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}),



@main.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({'message': 'Invalid username or password'}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({'message': 'Invalid username or password'}), 401

    return jsonify({'message': 'Login successful'}), 200

@main.route('/search', methods=['GET'])
def search_products():
    query = request.args.get('query')
    products = Product.query.filter(Product.name.ilike(f'%{query}%')).all()
    return jsonify([product.to_dict() for product in products])

@main.route('/purchase/<int:product_id>', methods=['POST'])
@login_required
def purchase_product(product_id):
    product = Product.query.get_or_404(product_id)
    if product.stock > 0:
        product.stock -= 1
        db.session.commit()
        return jsonify({'message': 'Purchase successful'}), 200
    else:
        return jsonify({'message': 'Out of stock'}), 400

@main.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    message = data.get('message')
    
    if "search" in message.lower():
        query = message.split("search", 1)[1].strip()
        products = Product.query.filter(Product.name.ilike(f'%{query}%')).all()
        if products:
            response = "\n".join([f"{p.id}: {p.name} - ${p.price}" for p in products])
        else:
            response = "No products found."
    elif "product" in message.lower():
        product_id = int(message.split("product", 1)[1].strip())
        product = Product.query.get(product_id)
        if product:
            response = f"Product {product.name} - ${product.price}\nDescription: {product.description}\nStock: {product.in_stock}"
        else:
            response = "Product not found."
    elif "purchase" in message.lower():
        product_id = int(message.split("purchase", 1)[1].strip())
        product = Product.query.get(product_id)
        if product and product.in_stock:
            product.in_stock -= 1
            db.session.commit()
            response = "Purchase successful!"
        else:
            response = "Purchase failed: Out of stock."
    elif message.lower() == "hello":
        response = "Hi there! How can I help you today?"
    else:
        response = "I'm sorry, I didn't understand that."

    return jsonify({'response': response})


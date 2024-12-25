from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ecommerce.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
CORS(app)

class User(db.Model):
    userid = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    updatedAt = db.Column(db.DateTime, onupdate=datetime.utcnow)
    isAdmin = db.Column(db.Boolean, default=False)

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    updatedAt = db.Column(db.DateTime, onupdate=datetime.utcnow)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    instock = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=True)
    image = db.Column(db.String(200), nullable=True)
    price = db.Column(db.Float, nullable=False)
    rating = db.Column(db.Float, nullable=True)
    review = db.Column(db.Text, nullable=True)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    updatedAt = db.Column(db.DateTime, onupdate=datetime.utcnow)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order = db.Column(db.String(200), nullable=False)
    paymentid = db.Column(db.String(200), nullable=False)
    status = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    userid = db.Column(db.Integer, db.ForeignKey('user.userid'), nullable=False)

class OrderItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    productid = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userid = db.Column(db.Integer, db.ForeignKey('user.userid'), nullable=False)
    review = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)

tables_created = False

@app.before_request
def before_request():
    global tables_created
    if not tables_created:
        db.create_all()

        if not Category.query.first():
            for i in range(1, 6):
                category = Category(name=f'Category {i}')
                db.session.add(category)
            db.session.commit()

        if not Product.query.first():
            categories = Category.query.all()
            for i in range(1, 101):
                product = Product(
                    name=f'Product {i}',
                    category_id=categories[i % len(categories)].id,
                    instock=100,
                    description=f'Description for product {i}',
                    image=f'https://images.app.goo.gl/kCXmDDNmyn5SkasDA{i}.jpg',
                    price=i * 10.0,
                    rating=4.5,
                    review=f'Review for product {i}'
                )
                db.session.add(product)
            db.session.commit()

        tables_created = True



@app.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{
        'id': product.id,
        'name': product.name,
        'category': product.category_id,
        'instock': product.instock,
        'description': product.description,
        'image': product.image,
        'price': product.price,
        'rating': product.rating,
        'review': product.review,
        'createdAt': product.createdAt,
        'updatedAt': product.updatedAt
    } for product in products])

@app.route('/api/products/<int:id>', methods=['GET'])
def get_product(id):
    product = Product.query.get_or_404(id)
    return jsonify({
        'id': product.id,
        'name': product.name,
        'category': product.category_id,
        'instock': product.instock,
        'description': product.description,
        'image': product.image,
        'price': product.price,
        'rating': product.rating,
        'review': product.review,
        'createdAt': product.createdAt,
        'updatedAt': product.updatedAt
    })

@app.route('/api/search', methods=['GET'])
def search_products():
    query = request.args.get('q', '')
    products = Product.query.filter(
        Product.name.like(f'%{query}%') | 
        Product.description.like(f'%{query}%')
    ).all()
    return jsonify([{
        'id': product.id,
        'name': product.name,
        'category': product.category_id,
        'instock': product.instock,
        'description': product.description,
        'image': product.image,
        'price': product.price,
        'rating': product.rating,
        'review': product.review,
        'createdAt': product.createdAt,
        'updatedAt': product.updatedAt
    } for product in products])

if __name__ == '__main__':
    app.run(debug=True)

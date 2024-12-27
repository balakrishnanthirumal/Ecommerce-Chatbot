from app import create_app, db
from app.models import Product, Category
import random

app = create_app()

with app.app_context():
    # Create database tables
    db.create_all()

    categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Sports']
    # add categories to the database
    for category in categories:
        db.session.add(Category(name=category))

    for _ in range(100):
        product = Product(
            name=f'Product{random.randint(1, 1000)}', 
            category=random.choice(categories),
            in_stock=True,
            description='This is a product description.',
            image='default.jpg',
            price=random.uniform(10.0, 100.0),
            rating=random.uniform(1.0, 5.0),
            review=random.randint(0, 100)
        )
        db.session.add(product)
    #commit changes to the database
    db.session.commit()
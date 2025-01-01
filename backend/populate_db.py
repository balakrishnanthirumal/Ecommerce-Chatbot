from app import create_app, db
from app.models import Product, Category
import random

app = create_app()

with app.app_context():
    # Create database tables
    db.create_all()

    categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Sports']
    
    # Add categories to the database
    for category in categories:
        if not Category.query.filter_by(name=category).first():  # Prevent duplicates
            db.session.add(Category(name=category))

    db.session.commit()  # Commit after adding categories

    # Fetch all categories from the database after commit
    all_categories = Category.query.all()

    for _ in range(100):
        category = random.choice(all_categories)  # Select a random category object
        
        product = Product(
            name=f'Product{random.randint(1, 1000)}', 
            category_id=category.id,  # Use category_id instead of category name
            in_stock=True,
            description='This is a product description.',
            image='default.jpg',
            price=random.uniform(10.0, 100.0),
            rating=random.uniform(1.0, 5.0),
            review_count=random.randint(0, 100)  # Using review_count from the model
        )
        db.session.add(product)
    
    # Commit changes to the database
    db.session.commit()

print("Database populated successfully!")

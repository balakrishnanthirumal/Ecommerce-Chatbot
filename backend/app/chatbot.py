import requests

class SalesChatbot:
    def __init__(self, backend_url):
        self.backend_url = backend_url

    def handle_message(self, message):
        if "search" in message.lower():
            query = message.split("search", 1)[1].strip()
            return self.search_product(query)
        elif "product" in message.lower():
            product_id = int(message.split("product", 1)[1].strip())
            return self.get_product(product_id)
        elif "purchase" in message.lower():
            product_id = int(message.split("purchase", 1)[1].strip())
            return self.purchase_product(product_id)
        elif message.lower() == "hello":
            return "Hi there! How can I help you today?"
        else:
            return "Sorry, I didn't understand that. You can ask me to search for products, get product details, or purchase a product."

    def search_product(self, query):
        response = requests.get(f'{self.backend_url}/search', params={'query': query})
        products = response.json()
        if products:
            return "\n".join([f"{p['id']}: {p['name']} - ${p['price']}" for p in products])
        else:
            return "No products found."

    def get_product(self, product_id):
        response = requests.get(f'{self.backend_url}/product/{product_id}')
        if response.status_code == 200:
            product = response.json()
            return f"Product {product['name']} - ${product['price']}\nDescription: {product['description']}\nStock: {product['stock']}"
        else:
            return "Product not found."

    def purchase_product(self, product_id):
        response = requests.post(f'{self.backend_url}/purchase/{product_id}')
        if response.status_code == 200:
            return "Purchase successful!"
        else:
            return "Purchase failed: Out of stock."


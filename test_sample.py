# Constants
MAX_USERS = 100
DEFAULT_TIMEOUT = 30
API_BASE_URL = "https://api.example.com"
VALID_STATUS_CODES = [200, 201, 204]

# Test data
test_user = {
    "id": 1,
    "username": "test_user",
    "email": "test@example.com",
    "is_active": True
}

sample_products = [
    {"id": 1, "name": "Product A", "price": 99.99},
    {"id": 2, "name": "Product B", "price": 149.99},
    {"id": 3, "name": "Product C", "price": 199.99}
]

# Helper functions
def calculate_total_price(products):
    """Calculate the total price of all products"""
    return sum(product["price"] for product in products)

def validate_email(email):
    """Simple email validation function"""
    import re
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return bool(re.match(pattern, email))

def generate_test_id():
    """Generate a unique test identifier"""
    import uuid
    return f"TEST_{str(uuid.uuid4())[:8]}"

# Mock data generator
class TestDataGenerator:
    @staticmethod
    def create_mock_user(user_id=None):
        return {
            "id": user_id or generate_test_id(),
            "username": f"user_{generate_test_id()}",
            "email": f"user_{generate_test_id()}@test.com",
            "created_at": "2024-03-20"
        }
    
    @staticmethod
    def create_mock_order():
        return {
            "order_id": generate_test_id(),
            "total_amount": round(random.uniform(10, 1000), 2),
            "status": random.choice(["pending", "completed", "cancelled"])
        }

# Test configuration
test_config = {
    "environment": "testing",
    "debug_mode": True,
    "retry_attempts": 3,
    "timeout": DEFAULT_TIMEOUT
} 
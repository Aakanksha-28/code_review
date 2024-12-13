// Constants
const MAX_USERS = 100;
const MAX_PERSONS = 100;
const DEFAULT_TIMEOUT = 30;
const API_BASE_URL = "https://api.example.com";
const VALID_STATUS_CODES = [200, 201, 204];

const test_user = {
    id: 1,
    username: "test_user",
    email: "test@example.com",
    isActive: true
};

const sample_products = [
    {id: 1, name: "Product A", price: 99.99},
    {id: 2, name: "Product B", price: 149.99},
    {id: 3, name: "Product C", price: 199.99}
];

// Helper functions
const calculateTotalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0);
};

const validateEmail = (email) => {
    const pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
    return pattern.test(email);
};

const generateTestId = () => {
    return `TEST_${crypto.randomUUID().slice(0, 8)}`;
};

const formatTestDate = (date = new Date()) => {
    const pad = (num) => num.toString().padStart(2, '0');
    
    return {
        iso: date.toISOString(),
        short: `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`,
        timestamp: date.getTime(),
        relative: (days) => {
            const newDate = new Date(date);
            newDate.setDate(date.getDate() + days);
            return newDate.toISOString();
        }
    };
};

// Mock data generator
class TestDataGenerator {
    static createMockUser(userId = null) {
        return {
            id: userId || generateTestId(),
            username: `user_${generateTestId()}`,
            email: `user_${generateTestId()}@test.com`,
            createdAt: "2024-03-20"
        };
    }
    
    static createMockOrder() {
        return {
            orderId: generateTestId(),
            totalAmount: Number((Math.random() * (1000 - 10) + 10).toFixed(2)),
            status: ["pending", "completed", "cancelled"][Math.floor(Math.random() * 3)]
        };
    }
}

// Test configuration
const test_config = {
    environment: "testing",
    debugMode: true,
    retryAttempts: 3,
    timeout: DEFAULT_TIMEOUT
}; 
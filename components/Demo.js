import { useState } from "react";
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

// Test configuration
const test_config = {
    environment: "testing",
    debugMode: true,
    retryAttempts: 3,
    timeout: 30
};

// Mock data generator
class TestDataGenerator {
    static createMockUser(userId = null) {
        return {
            id: userId || `TEST_${Math.random().toString(36).substr(2, 8)}`,
            username: `user_${Math.random().toString(36).substr(2, 8)}`,
            email: `test_${Math.random().toString(36).substr(2, 8)}@test.com`,
            createdAt: formatTestDate().short
        };
    }
    
    static createMockOrder() {
        return {
            orderId: `ORDER_${Math.random().toString(36).substr(2, 8)}`,
            totalAmount: Number((Math.random() * (1000 - 10) + 10).toFixed(2)),
            status: ["pending", "completed", "cancelled"][Math.floor(Math.random() * 3)],
            createdAt: formatTestDate().iso
        };
    }
}


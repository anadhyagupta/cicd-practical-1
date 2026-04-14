const request = require('supertest');
const app = require('./app');

describe('Web App Tests', () => {
    test('GET / should return success', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('success');
    });

    test('GET /health should return OK', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
    });
});
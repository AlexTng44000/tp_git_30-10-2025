import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/server.js';
import { connectDB, disconnectDB } from '../src/config/database.js';
import { RequestType } from '../src/models/RequestType.js';

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/support_api_test';

beforeAll(async () => {
    await connectDB(mongoUri);
    await RequestType.create({
        code: 'TEST_X',
        name: 'Test X',
        description: 'desc',
        category: 'Test',
        isActive: true
    });
});

afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await disconnectDB();
});

test('GET /health => 200', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
});

test('GET /api/request-types => array', async () => {
    const res = await request(app).get('/api/request-types');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
});

test('POST /api/request-types => 201', async () => {
    const payload = {
        code: 'NEW_REQ',
        name: 'Nouvelle',
        description: 'd',
        category: 'C'
    };
    const res = await request(app).post('/api/request-types').send(payload);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('_id');
});

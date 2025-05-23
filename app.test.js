/*
Name - Cardell

File purpose - This file contains a test suite for an Express.js application using Jest and Supertest.
The test suite includes a test for a REST API endpoint that returns a JSON object with a message.
*/

const request = require('supertest');
const express = require('express');

const app = express();

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello, World!" });
});

describe('GET /api/hello', () => {
    it('should return a JSON object with a message', async () => {
        const response = await request(app).get('/api/hello');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: "Hello, World!" });
    });
});
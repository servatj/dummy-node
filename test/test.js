const request = require('supertest');
const app = require('../src/app');

describe('Get /', () => {
  it('responds with hello world', async () => {
    const response = await request(app).get("/");
     expect(response.statusCode).toBe(200);
     expect(response.text).toBe('Hello World');
  });
})

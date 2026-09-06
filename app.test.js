const request = require('supertest');
const app = require('./app');


test('returns Hello World!',async ()=> {
    const response = await request(app).get('/');
        expect(response.body).toEqual({message: 'Hello World!'})
})

describe('returns status 200 and success ok ',() => {
    test('return status 200',async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
    })
    test('return success',async () => {
        const response = await request(app).get('/health');
        expect(response.body).toEqual({status : 'ok'});
    })
})
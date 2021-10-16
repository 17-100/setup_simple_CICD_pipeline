const app = require('./app.js');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);


    test('blabla', async () => {
        const response = await request.get('/')
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('Hello World!')
       /*  done(); */
    })



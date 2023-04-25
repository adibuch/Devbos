const request = require('supertest')
const app = require('../server')

describe('test',() =>{
    test('Test 1:', async () =>{

        const res = await request(app).get('./')
        expect(res.statusCode).toEqul(200)

    });

});
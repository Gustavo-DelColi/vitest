import { test, expect, describe, beforeAll } from "vitest"
import request from "supertest"
import { app } from "../../../app"

describe('User E2E', () =>{

    test('Deve ser possivel criar usuário', async ()=>{
        await app.ready();

        await request(app.server)
        .post('/users')
        .set('Authorization', 'Bearer TOKEN_FAKE' )
        .send({
            name: 'User Test E2E',
            username: 'user_test_e2e'
        }).expect(200)
    })

    test('Não deve ser possivel criar usuário sem toekn auth', async ()=>{
        await app.ready();

        await request(app.server)
        .post('/users')

        .send({
            name: 'User Test E2E',
            username: 'user_test_e2e'
        }).expect(401)
    })
})
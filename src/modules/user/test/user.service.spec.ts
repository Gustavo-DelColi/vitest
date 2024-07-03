import { test, expect, describe, beforeAll } from "vitest"
import { UserService } from "../user.service"

let userService: UserService;

beforeAll(() =>{
    userService = new UserService();
})

describe('Users Service', () => {
    test('Deve ser possivel criar um usuário', () =>{

        const result = userService.create({
            name: 'User Test',
            username: 'user_test'
        })

        expect(result).toHaveProperty('id')
        expect(result.username).toBe('user_test')
    })

    test('não deve ser possivel criar um usuário já existente', () =>{
        userService.create({
            name: 'User Test',
            username: 'user_test_already_exists'
        })

        expect(() =>{
            userService.create({
                name: 'User Test',
                username: 'user_test_already_exists'
            })
        }).toThrow('User already exist')

    })
    test("deve ser possível recuperar a lista de usuário", () =>{
        const result = userService.findAll();

        expect(result).toHaveLength(2)
    })
})
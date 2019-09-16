const Users = require('./user-model.js');
const db = require('../database/dbConfig.js');

describe('The Users Model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('The add function', () => {
        it('should create a new user', async () => {

            const userData = {
                username: 'userTest',
                password: 'password'
            };
            await Users.add(userData);

            const users = await db('users');
            console.log(users);
            expect(users.length).toBe(1);
            expect(users[0].username).toBe('userTest');
        })
    })

    describe('The findBy function', () => {
        it('should return User that matches', async () => {
            const userData = {
                username: 'userTest',
                password: 'password'
            };
            await Users.add(userData);

            const users = await Users.findBy(userData.username);
            console.log(users);
            // expect(users.length).toBe(1);
            // expect(users[0]).toEqual({ id: 1, username: 'userTest', password: "password"});
        })
    })
})
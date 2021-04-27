import users from './users.json';
import { getUser, extendUsersWithRandomAge, transform } from './code';
import { assert } from 'chai';

describe('Task #2', () => {
    it('getUser function should return "null" if only one of username or password matches', () => {
        assert.strictEqual(getUser(users, 'testuser123', 'NOT_CORRECT'), null);
        assert.strictEqual(getUser(users, 'NOT_CORRECT', 'password123'), null);
    });

    it('getUser function should return correct user by correct (username, password) pair', () => {
        assert.deepEqual(getUser(users, 'testuser123', 'password123'), {
            username: "testuser123",
            password: "password123"
        });
    });

    it('getUser function should returned "null" for malformed arguments', () => {
        assert.strictEqual(getUser(users, null, 'password1'), null);
        assert.strictEqual(getUser(users, undefined, 'test'), null);
    });
});

describe('Task #4', () => {
    let usersExtended;

    beforeEach(() => {
        usersExtended = extendUsersWithRandomAge(users);
    })
    it('usersExtended should have the same length as users', () => {
        assert.strictEqual(users.length, usersExtended.length);
    });

    it('usersExtended objects should contain "age" property', () => {
        assert.exists(usersExtended[1].age);
        assert.exists(usersExtended[3].age);
    });

    it('age in usersExtended array should be between 21 and 40', () => {
        usersExtended.forEach(user => {
            assert.isAtLeast(user.age, 21);
            assert.isAtMost(user.age, 40);
        });
    });

    it('should be whole number', () => {
        usersExtended.forEach(user => {
            assert.equal(Math.floor(user.age), user.age);
        });
    });
});


describe('Task #6', () => {
    it('transform function should exist', () => {
        assert.exists(transform);
    })

    it('transform should transform users array correctly', () => {
        assert.deepEqual(transform(users), {
            "testuser123": {
                "username": "testuser123",
                "password": "password123"
            },
            "admin": {
                "username": "admin",
                "password": "qwerty"
            },
            "johnybravo": {
                "username": "johnybravo",
                "password": "123456789"
            },
            "hacker": {
                "username": "hacker",
                "password": "trojan"
            },
            "guest": {
                "username": "guest",
                "password": "empty"
            }
        });
    })
});
import users from './users.json';
import { getUser, extendUsersWithRandomAge, transform, logIntervals } from './code';
import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);

describe('Task #2', () => {
    it('getUser function should return "null" if only one of username or password matches', () => {
        chai.assert.strictEqual(getUser(users, 'testuser123', 'NOT_CORRECT'), null);
        chai.assert.strictEqual(getUser(users, 'NOT_CORRECT', 'password123'), null);
    });

    it('getUser function should return correct user by correct (username, password) pair', () => {
        chai.assert.deepEqual(getUser(users, 'testuser123', 'password123'), {
            username: 'testuser123',
            password: 'password123'
        });
    });

    it('getUser function should returned "null" for malformed arguments', () => {
        chai.assert.strictEqual(getUser(users, 'notExistingUser', 'password1'), null);
        chai.assert.strictEqual(getUser(users, 'testuser123', 'wrong password'), null);
    });
});

describe('Task #4', () => {
    let usersExtended;

    beforeEach(() => {
        usersExtended = extendUsersWithRandomAge(users);
    })
    it('usersExtended should have the same length as users', () => {
        chai.assert.strictEqual(users.length, usersExtended.length);
    });

    it('usersExtended objects should contain "age" property', () => {
        chai.assert.exists(usersExtended[1].age);
        chai.assert.exists(usersExtended[3].age);
    });

    it('age in usersExtended array should be between 21 and 40', () => {
        usersExtended.forEach(user => {
            chai.assert.isAtLeast(user.age, 21);
            chai.assert.isAtMost(user.age, 40);
        });
    });

    it('should be whole number', () => {
        usersExtended.forEach(user => {
            chai.assert.equal(Math.floor(user.age), user.age);
        });
    });
});


describe('Task #6', () => {
    it('transform function should exist', () => {
        chai.assert.exists(transform);
    })

    it('transform should transform users array correctly', () => {
        chai.assert.deepEqual(transform(users), {
            testuser123: {
                username: "testuser123",
                password: "password123"
            },
            admin: {
                username: "admin",
                password: "qwerty"
            },
            johnybravo: {
                username: "johnybravo",
                password: "123456789"
            },
            hacker: {
                username: "hacker",
                password: "trojan"
            },
            guest: {
                username: "guest",
                password: "empty"
            }
        });
    })
});

describe('Task #7', () => {
    it('should print 10 times', (done) => {
        const spy = chai.spy();
        logIntervals(spy);
        setTimeout(() => {
            chai.expect(spy).to.have.been.called.exactly(10);
            done();
        }, 1000);
    });

    it('should print proper vales', (done) => {
        const spy = chai.spy();
        logIntervals(spy);
        setTimeout(() => {
            for(let i = 0; i < 10; i++) {
                chai.expect(spy).on.nth(i + 1).be.called.with('call number ' + i);
            }
            done();
        }, 1000);
    });
});
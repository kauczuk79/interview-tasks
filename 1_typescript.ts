interface User {
    username: string;
    password: string;
};
// ========== Task #1 - write GetUserResult ==========
const user: GetUserResult = { // This should be valid
    username: 'test',
    password: 'secret'
};
const noResults: GetUserResult = null; // This should be valid
const notDefined: GetUserResult = undefined; // This should be marked as error

// ========== Task #2 - write UserWithAge which contains age ==========
const validUserWithAge: UserWithAge = {
    username: 'user',
    password: 'pass',
    age: 35
};

// ========== Task #3 - implement UserMap ==========
const testVariable: UserMap = {
    testuser123: {
        username: 'testuser123',
        password: 'password123'
    },
    shouldBeAnError: { // This should be marked as error
        test: 1
    },
    aNumberIsErrorToo: 1, // This should be marked as error
    aStringIsErrorToo: 'lorem ipsum' // This should be marked as error
}
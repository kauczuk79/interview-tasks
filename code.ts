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

/**
 * Finds matching username with password
 * @param users array of users
 * @param username string username
 * @param password string password
 * @returns user or null when not found
 */
export function getUser(users: User[], username: string, password: string): GetUserResult {
  // ========== Task #2 - implement getUser function ==========
}

// ========== Task #3 - write UserWithAge which contains age ==========
const validUserWithAge: UserWithAge = {
  username: 'user',
  password: 'pass',
  age: 35
};
/**
 * Extend all the users records with 'age' property with random value from range 21 to 40
 * @param users array of users
 * @returns users extended by age property 
 */
export function extendUsersWithRandomAge(users: User[]): UserWithAge[] {
  // ========== Task #4 - implement extendUsersWithRandomAge function ==========
}

// ========== Task #5 - implement UserMap ==========
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

/**
 * Transform "users" array into single object indexed by username, example:
 * {
 *   testuser123: {
 *     username: 'testuser123',
 *     password: 'password123',
 *   },
 *   admin: { ... },
 *   ...
 * }
 * @param users array of users
 * @returns transformed users array indexed by username
 */
export function transform(users: User[]): UserMap {
  // Task #6 - Implement transform function
}
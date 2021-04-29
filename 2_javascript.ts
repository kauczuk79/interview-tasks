interface User {
  username: string;
  password: string;
};
/**
 * Finds matching username with password
 * @param users array of users
 * @param username string username
 * @param password string password
 * @returns user or null when not found
 */
export function getUser(users: User[], username: string, password: string) {
  let result;
  // ========== Task #1 - implement getUser function ==========
  return result;
}
/**
 * Extend all the users records with 'age' property with random value from range 21 to 40
 * @param users array of users
 * @returns users extended by age property 
 */
export function extendUsersWithRandomAge(users: User[]) {
  // ========== Task #2 - implement extendUsersWithRandomAge function ==========
  return [];
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
export function transform(users: User[]) {
  // ========== Task #3 - Implement transform function ==========
  return {};
}

// ========== Task #4 - correct to have expected behavior ==========
/**
 * Function logs 10 times a string in every 10 ms
 * 
 * Current output:
 * > logIntervals(console.log);
 * call number 10
 * call number 10
 * call number 10
 * call number 10
 * call number 10
 * call number 10
 * call number 10
 * call number 10
 * call number 10
 * call number 10
 * 
 * Expected output:
 * > logIntervals(console.log);
 * call number 0
 * call number 1
 * call number 2
 * call number 3
 * call number 4
 * call number 5
 * call number 6
 * call number 7
 * call number 8
 * call number 9
 * @param printFn print function
 */
export function logIntervals(printFn: (string) => void) {
  for(var iteration = 0; iteration < 10; iteration++) { 
    setTimeout(() => {
      printFn('call number ' + iteration)
    }, 10);
  }
}

// logIntervals(console.log)
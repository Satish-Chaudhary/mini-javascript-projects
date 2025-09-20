// This script generates an MD5 hash from a given password and compares it to a stored hash.
// It uses the crypto module to create the hash.
const crypto = require('crypto');

const plainPassword = 'Test@123'; // Change this to test your password
const storedHash = 'f925916e2754e5e03f75dd58a5733251'; // Your MD5 hash

// Create MD5 hash from input
const hash = crypto.createHash('md5').update(plainPassword).digest('hex');

console.log('Generated Hash:', hash);

if (hash === storedHash) {
  console.log('Correct password!');
} else {
  console.log('Wrong password.');
}
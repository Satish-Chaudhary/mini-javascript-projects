const bcrypt = require('bcryptjs');

// Define the hash
const hash = "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi";

// Define the character set
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Define the maximum password length
const maxLength = 10;

// Function to generate all possible passwords
function* generatePasswords(length) {
  const charsArray = chars.split('');
  for (let i = 0; i < length; i++) {
    for (const char of charsArray) {
      yield char;
    }
  }
  if (length > 1) {
    for (const password of generatePasswords(length - 1)) {
      for (const char of charsArray) {
        yield password + char;
      }
    }
  }
}

// Iterate over possible passwords
async function findPassword() {
  for (let length = 1; length <= maxLength; length++) {
    for (const password of generatePasswords(length)) {
      if (await bcrypt.compare(password, hash)) {
        console.log(`Password found: ${password}`);
        return;
      }
    }
  }
  console.log('Password not found');
}

findPassword();

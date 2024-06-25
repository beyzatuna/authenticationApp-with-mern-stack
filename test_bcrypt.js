const bcrypt = require('bcryptjs');

const password = 'Test@1234';
const hashedPassword = '$2b$10$...' 

async function testPassword() {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log(`Password match: ${isMatch}`);
  } catch (error) {
    console.error('Error comparing password:', error.message);
    console.error('Stack Trace:', error.stack);
  }
}

testPassword();

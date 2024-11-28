const User = require('../models/User');
const bcrypt = require('bcryptjs');

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash('@Shakhianhackers345#', 10);
  
  const adminUser = {
    name: 'Anonymous Kenya Admin',
    email: 'anonymouskenya@gmail.com',
    password: hashedPassword,
    school: 'Anonymous Kenya',
    isAdmin: true,
    userId: 'ADMIN-001'
  };

  // Check if admin exists, if not create one
  const adminExists = await User.findOne({ email: adminUser.email });
  if (!adminExists) {
    await User.create(adminUser);
    console.log('Admin account created successfully');
  }
};

module.exports = createAdmin;

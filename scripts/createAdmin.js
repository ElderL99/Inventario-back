require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/User');
const connectDB = require('../utils/db');

const validatePassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
  return regex.test(password);
};

(async () => {
  await connectDB();

  const email = 'adan@gmail.com';
  const password = 'Papasconqueso1?';

  if (!validatePassword(password)) {
    console.log('❌ La contraseña debe tener al menos una mayúscula y un símbolo');
    process.exit(1);
  }



  const exists = await User.findOne({ email });
  if (exists) {
    console.log('⚠️  El usuario ya existe');
    process.exit(0);
  }

  const user = await User.create({
    name: 'Adan',
    email,
    password,
    role: 'admin' 
  });

  console.log('✅ Usuario admin creado:');
  console.log({ email: user.email, password, role: user.role });

  await mongoose.disconnect();
})();

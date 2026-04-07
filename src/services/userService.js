const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const registerUser = async (data) => {
  const existingUser = await User.findOne({ email: data.email.toLowerCase() });

  if (existingUser) {
    const error = new Error('Ya existe un usuario con ese email');
    error.statusCode = 400;
    throw error;
  }

  const user = await User.create(data);

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt
  };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    const error = new Error('Credenciales inválidas');
    error.statusCode = 401;
    throw error;
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    const error = new Error('Credenciales inválidas');
    error.statusCode = 401;
    throw error;
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d'
    }
  );

  return {
    message: 'Login exitoso',
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  };
};

module.exports = {
  registerUser,
  loginUser
};

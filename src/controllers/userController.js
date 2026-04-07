const userService = require('../services/userService');

const register = async (req, res, next) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await userService.loginUser(email, password);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login
};

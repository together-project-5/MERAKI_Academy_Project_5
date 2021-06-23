const express = require('express');

const { createUser } = require('./../../controllers/auth/signUp');

const userRouter = express.Router();

userRouter.post('/register', createUser);

module.exports = userRouter;
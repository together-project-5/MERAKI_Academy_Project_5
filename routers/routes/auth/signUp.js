const express = require("express");

const { createUser } = require("./../../controllers/auth/signUp");

const registerRouter = express.Router();

registerRouter.post("/register", createUser);

module.exports = registerRouter;

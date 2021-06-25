const express = require("express");

const {
  getAllUser,
  getUserById,
  getUserByName,
} = require("./../../routers/controllers/user");

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", getUserById);
userRouter.get("/:name", getUserByName);

module.exports = userRouter;

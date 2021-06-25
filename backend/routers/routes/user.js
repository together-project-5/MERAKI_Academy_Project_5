const express = require("express");

const {
  getAllUser,
  getUserById,
} = require("./../../routers/controllers/user");

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", getUserById);


module.exports = userRouter;

const express = require("express");

const {
  getAllUser,
  getUserById,
  getUserByName,
  editProfile
} = require("./../../routers/controllers/user");

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", getUserById);
userRouter.get("/name/:name", getUserByName);
userRouter.put("/edit/:id",editProfile)

module.exports = userRouter;

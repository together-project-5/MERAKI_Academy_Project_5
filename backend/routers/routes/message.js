const express = require("express");

const {
    createRoom,
    getRoom,
    createMessage,
    getMessage
} = require("../controllers/messages");

const messageRouter = express.Router();

messageRouter.post("/room", createRoom)
messageRouter.get("/room/:_IdSender/:_IdReciver", getRoom)
messageRouter.post("/message", createMessage)
messageRouter.get("/message/:senderId/:roomId", getMessage)

module.exports = messageRouter;

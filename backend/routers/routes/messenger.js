const express = require("express");

const {
    newConversation,
    getUsers
} = require("../controllers/conversation");

const messengerRouter = express.Router();
messengerRouter.post("/api/conversation", newConversation);
messengerRouter.get("/api/conversation/:id", getUsers);

module.exports = messengerRouter;


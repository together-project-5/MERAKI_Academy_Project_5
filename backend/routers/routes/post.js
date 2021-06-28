const express = require("express");

const {
  createPost,
  getAllPost,
  getPostById,
  getPostByTitle,
  deletePost,
  editPost,
  getPostByType,
  archivePost,
  getArchivePost
} = require("./../../routers/controllers/post");

const postRouter = express.Router();

postRouter.post("/create", createPost);
postRouter.get("/", getAllPost);
postRouter.get("/:id", getPostById);
postRouter.get("/title/:title", getPostByTitle);
postRouter.delete("/:id", deletePost);
postRouter.put("/edit/:id", editPost);
postRouter.get("/filter/:type", getPostByType);
postRouter.get("/archive/:id", archivePost);
postRouter.get("/archive", getArchivePost);

module.exports = postRouter;

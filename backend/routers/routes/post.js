const express = require("express");

const {
  createPost,
  getAllPost,
  getPostById,
  getPostByTitle,
  deletePost,
  editPost,
  getPostByType,
  getArchivePost,
  archivePost,
} = require("../controllers/post");

const postRouter = express.Router();

postRouter.post("/create", createPost);
postRouter.get("/", getAllPost);
postRouter.get("/archive", getArchivePost);
postRouter.get("/title/:title", getPostByTitle);
postRouter.delete("/:id", deletePost);
postRouter.put("/edit/:id", editPost);
postRouter.get("/filter/:type", getPostByType);
postRouter.post("/archive/:id", archivePost);
postRouter.get("/:id", getPostById);

module.exports = postRouter;


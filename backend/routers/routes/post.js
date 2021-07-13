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
  addComment,
  showComment,
  editLikePost,
  reportPost
} = require("../controllers/post");

const postRouter = express.Router();
const authentication = require("./../middlewares/authentication");

postRouter.post("/api/upload", createPost);
postRouter.get("/",authentication, getAllPost);
postRouter.get("/archive", getArchivePost);
postRouter.get("/title/:title", getPostByTitle);
postRouter.delete("/:id", deletePost);
postRouter.put("/edit/:id", editPost);
postRouter.get("/filter/:type", getPostByType);
postRouter.post("/archive/:id", archivePost);
postRouter.put("/editLike/:id", editLikePost);
postRouter.get("/:id", getPostById);
postRouter.post("/report/:id", reportPost);
postRouter.get("/comment/:id", showComment);
postRouter.post("/comment/:id", addComment);



module.exports = postRouter;


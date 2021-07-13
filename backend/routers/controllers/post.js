const db = require("./../../../backend/db/db");
const  {cloudinary}  = require('../../utils/cloudinary');


const createPost =async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'ml_default',
    });
    const query = `INSERT INTO post (userId ,type ,title,description ,url) VALUES (?,?,?,?,?)`;
    let { userId, type, title, description } = req.body.post;
    const data = [userId, type, title, description, uploadResponse.url];
    db.query(query, data, (err, result) => {
      if (err) return res.status(400).send("can't create post try again please ");
      res.status(201).json(result);
    });
    // res.status(201).json({ uploadResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
};

const getAllPost = (req, res) => {
  const query = `SELECT * FROM post INNER JOIN user ON userId = _idUser And archive = 0 ;`;
  db.query(query, (err, result) => {
    if (err) return res.status(400).send("posts not found try again please ");
    res.status(201).json(result);
  });
};

const getPostById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM post WHERE _IdPost = ?`;
  const data = [id];
  db.query(query, data, (err, result) => {
    if (err) return res.status(400).send("post not found");
    res.status(200).json(result);
  });
};
const getPostByTitle = (req, res) => {
  const title = req.params.title;
  const query = `SELECT * FROM post WHERE title = ?`;
  const data = [title];
  db.query(query,data, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).send("post not found");
    }
    res.status(200).json(result);
  });
};
const deletePost = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM post WHERE _IdPost = ?`;
  const data = [id];
  db.query(query, data, (err, result) => {
    if (err) return res.status(400).send("can't delete post try again please");
    res.status(200).json("success deleted");
  });
};

const editPost = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE post SET title=?,description=? WHERE _IdPost=${id}`;
  const { title, description } = req.body;
  const data = [title, description];
  db.query(query, data, (err, result) => {
    if (err) return res.status(400).send("can't update post try again please");
    console.log(res);
  });
};

const getPostByType = (req, res) => {
  const type = req.params.type;
  const query = `SELECT * FROM post INNER JOIN user ON userId = _idUser And type = ?`;
  const data = [type];
  db.query(query, data, (err, result) => {
    if (err) return res.status(400).send("post not found");
    res.status(200).json(result);
  });
};

const getArchivePost = (req, res) => {
  const query = `SELECT * FROM post WHERE archive=?`;
  const data = [1];
  db.query(query, data, (err, result) => {
    if (err) res.status(400).send("post not found");
    res.status(200).json(result);
  });
};

const archivePost = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE post SET archive=? WHERE _IdPost=${id}`;
  const { archive } = req.body;
  const data = [archive];
  db.query(query, data, (err, res) => {
    if (err)
      return res.status(400).send("can't add post to archive try again please");
    console.log(res);
  });
};

const addComment = (req,res) => {
  const id = req.params.id;
  const query = `INSERT INTO comments (userId ,postId , comment) VALUES (?,?,?)`;
  let { userId, postId, comment } = req.body;
  const data = [userId, postId, comment];
  db.query(query, data, (err, result) => {
    if (err) return res.status(400).send("can't comment try again please ");
    res.status(201).json(result);
  });
};

const showComment = (req,res) => {
  const id = req.params.id;
  const query = `SELECT * FROM comments INNER JOIN user ON postId=? AND userId = _idUser;`;
  const data = [id];
  db.query(query, data, (err, result) => {
    if (err) res.status(400).send("post not found");
    res.status(200).json(result);
  });
};

const editLikePost = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE post SET likes=? WHERE _IdPost=${id} `;
  const likes = req.body.likes;
  const data = [likes];
  db.query(query, data, (err, res) => {
    if (err) return res.status(400);
    console.log("result", res);
  });
};

const reportPost = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE post SET report=? WHERE _IdPost=${id}`;
  const { report } = req.body;
  const data = [report];
  db.query(query, data, (err, result) => {
    if (err)
      return res.status(400).send("can't add post to report try again please");
    res.json(result);
  });
};

module.exports = {
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
  reportPost,
};

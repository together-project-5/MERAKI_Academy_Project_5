const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db");
const userRouter = require("./routers/routes/user");
const registerRouter = require("./routers/routes/auth/signUp");
const authRouter = require("./routers/routes/auth/login");
const postRouter = require("./routers/routes/post");
const favoriteRouter = require("./routers/routes/favorite")
const google = require("./routers/controllers/google/google")
const likeRouter = require("./routers/routes/like")
const messengerRouter = require("./routers/routes/messenger")

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use("/user", userRouter, registerRouter, authRouter);
app.use("/post", postRouter);
app.use("/favorite", favoriteRouter)
app.use(google);
app.use(likeRouter)
app.use(messengerRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db');
const userRouter = require("./routers/routes/user");
const registerRouter = require('./routers/routes/auth/signUp')
const authRouter = require("./routers/routes/auth/login");
const postRouter = require("./routers/routes/post");


const app = express();


//routers


//built-in middlewares
app.use(express.json());


//third-party middleware
app.use(cors());



//app routers
app.use('/user', userRouter,registerRouter);
app.use('/user', authRouter);
app.use('/post', postRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});

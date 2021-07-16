<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.logomoose.com/wp-content/uploads/2018/02/Hands-Play-Logomoose.png" alt="together logo"></a>
</p>

<h3 align="center">Together</h3>

---

<p align="center"> Together is a learning social media platform.it helps us to exchange the experience with people around the world and communicate with him through chat rooms.

Together is simple, smooth and anyone can use it easily.
<br>

</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>

The goal of the site is to facilitate communication and exchange of experiences and knowledge between people to spread knowledge and different cultures among the site's visitors.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

create sql tables :

CREATE TABLE user(
\_IdUser INT AUTO_INCREMENT NOT NULL,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
username VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
age INT(3),
gender VARCHAR(255),
picture TEXT,
PRIMARY KEY (\_IdUser)
);
CREATE TABLE Post (
\_IdPost INT AUTO_INCREMENT NOT NULL,
userId INT,
FOREIGN KEY (userId) REFERENCES user(\_IdUser),
type VARCHAR(255) NOT NULL,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
likes int (3),
report int (3),
url VARCHAR(255) NOT NULL,
archive iNT(3) DEFAULT 0,
favorite iNT(3) DEFAULT 0,
PRIMARY KEY (\_IdPost)
);
CREATE TABLE userLike(
\_IdLike INT AUTO_INCREMENT NOT NULL,
userId INT,
FOREIGN KEY (userId) REFERENCES user(\_IdUser),
postId INT,
FOREIGN KEY (postId) REFERENCES Post(\_IdPost),
PRIMARY KEY (\_IdLike)
);

CREATE TABLE comments(
\_IdComment INT AUTO_INCREMENT NOT NULL,
userId INT,
postId INT,
FOREIGN KEY (userId) REFERENCES user(\_IdUser),
FOREIGN KEY (postId) REFERENCES Post(\_IdPost),
comment VARCHAR(255),
date DATETIME,
PRIMARY KEY (\_IdComment)
);

### Installing

you must install
in backend : (bcrypt, cloudinary, cors, dotenv, express, google-auth-library, jsonwebtoken, mysql2, nodemon, socket.io, unique-names-generator)
in frontend : (axios, cloudinary-react, dotenv, google-auth-library, jsonwebtoken, react, react-dom, react-google-login, react-redux, react-router-dom, react-scripts, redux)

don't forget make npm i
and sql statement like (insert)

## 🎈 Usage <a name="usage"></a>

sign up then sign in now you can see main page that contain all posts in the right side you have a menu contain many of options as create post, my profile, favorite, archive and log out

## ⛏️ Built Using <a name = "built_using"></a>

- [Mysql](https://www.mysql.com/) - Database
- [Express JS](https://expressjs.com/) - Server Framework
- [React JS](https://https://reactjs.org/) - Web Framework
- [Node JS](https://nodejs.org/en/) - Server Environment

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import Like from "./like/index";
// import Comment from "./comment/index";
// import Save from "./save/index";
// import "./main.css";
// import MenuItem from "./postList";

// const Main = () => {
//   const history = useHistory();
//   const [posts, setPosts] = useState([]);

//   const buttonPost = (type) => {
//     axios
//       .get(`http://localhost:5000/post/filter/${type}`)
//       .then((res) => {
//         setPosts(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const handleClick = () => {
//     history.push("/createPost");
//   };

//   return (
//     <div className="App">
//       <button
//         className="contained"
//         onClick={(e) => {
//           e.preventDefault();
//           buttonPost("random");
//         }}
//       >
//         random
//       </button>
//       <button
//         className="contained"
//         onClick={(e) => {
//           e.preventDefault();
//           buttonPost("sport");
//         }}
//       >
//         Sport
//       </button>
//       <button
//         className="contained"
//         onClick={(e) => {
//           e.preventDefault();
//           buttonPost("programming");
//         }}
//       >
//         programming
//       </button>
//       <button
//         className="contained"
//         onClick={(e) => {
//           e.preventDefault();
//           buttonPost("cook");
//         }}
//       >
//         Cook
//       </button>
//       <button
//         className="contained"
//         onClick={(e) => {
//           e.preventDefault();
//           buttonPost("english");
//         }}
//       >
//         English
//       </button>
//       <button className="post" onClick={handleClick}>
//         Create Post
//       </button>
//       {}
//       {posts
//         ? posts.map((post, i) => {
//             return (
//               <div className="postDiv" key={i}>
//                 <div>
//                   <MenuItem />{" "}
//                   <img
//                     className="profilePic"
//                     src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
//                   />
//                   <p className="postTitle">{post.name}</p>
//                   <p className="postTitle">{post.title}</p>
//                   <p className="postDescription">{post.description}</p>
//                   <img className="postImage" src={post.url} />
//                   <div>
//                     <Like id={post._IdPost} i={i} />
//                     <Comment id={post._IdPost} i={i} />
//                     <Save id={post._IdPost} i={i} />
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         : ""}
//     </div>
//   );
// };
// export default Main;

import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Like from "./like/index";
import Comment from "./comment/index";
import Save from "./save/index";
import "./main.css";
import MenuItem from "./postList";
import { setPost } from "../../reducers/post";

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
    };
  });

  const buttonPost = (type) => {
    axios
      .get(`http://localhost:5000/post/filter/${type}`)
      .then((res) => {
        dispatch(setPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = () => {
    history.push("/createPost");
  };

  return (
    <div>
   
      <button
        className="contained"
        onClick={(e) => {
          e.preventDefault();
          buttonPost("sport");
        }}
      >
        Sport
      </button>
      <button
        className="contained"
        onClick={(e) => {
          e.preventDefault();
          buttonPost("programming");
        }}
      >
        programming
      </button>
      <button
        className="contained"
        onClick={(e) => {
          e.preventDefault();
          buttonPost("cook");
        }}
      >
        Cook
      </button>
      <button
        className="contained"
        onClick={(e) => {
          e.preventDefault();
          buttonPost("english");
        }}
      >
        English
      </button>
      <button className="post" onClick={handleClick}>
        Create Post
      </button>

      {/* {state.posts.map((post, i) => {
        return (
          <div className="postDiv" key={i}>
            <div>
              <MenuItem />{" "}
              <img
                className="profilePic"
                src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
              />
              <p className="postTitle">{post.name}</p>
              <p className="postTitle">{post.title}</p>
              <p className="postDescription">{post.description}</p>
              <img className="postImage" src={post.url} />
              <div>
                <Like id={post._IdPost} i={i} />
                <Comment id={post._IdPost} i={i} />
                <Save id={post._IdPost} i={i} />
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Main;

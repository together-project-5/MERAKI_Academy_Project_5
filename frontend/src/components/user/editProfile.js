import React from "react";
import axios from "axios";
const editProfile =()=>{
const [user, setUser] = useState({});

const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        axios
          .post(`http://localhost:5000/user/edit/${id}`, user)
          .then((res) => {
            console.log("res", res.data);
            dispatch(createPost(res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      };
  };
return (
    <>
      <div >
        <form onSubmit={handleSubmit}>
          <input
            name="userName"
            type="text"
            placeholder=" User Name"
            onChange={handleChange}
          />
          <input
            name="password"
            type="text"
            placeholder=" password"
            onChange={handleChange}
          />
          <input
            name="url"
            type="text"
            placeholder=" URL"
            onChange={handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
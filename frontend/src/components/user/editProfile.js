import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import setUser from "../../reducers/login";
import TextField from "@material-ui/core/TextField";
import editProfile from "./editProfile.css";
import { useHistory } from "react-router-dom";
import { setTokenOut, setUserOut } from "./../../reducers/login";

const EditProfile = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const history = useHistory();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
    // const reader = new FileReader();
    // reader.readAsDataURL(selectedFile);
      localStorage.setItem("token", "");
      localStorage.setItem("user", "");
      localStorage.setItem("name", "");
      localStorage.setItem("_IdUser", "");
      localStorage.setItem("password", "");
      localStorage.setItem("username", "");
      localStorage.setItem("theme", "");
      dispatch(setTokenOut(""));
      dispatch(setUserOut({}));
      history.push("/login");
  
  };

  const uploadImage = async (base64EncodedImage) => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", userData);
    try {
      await fetch(
        `http://localhost:5000/user/edit/${localStorage.getItem("_IdUser")}`,
        {
          method: "put",
          body: JSON.stringify({
            data: base64EncodedImage,
            userData: userData,
          }),

          headers: { "Content-type": "application/json" },
        }
      ).then((result) => {
        console.log("result", result);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <form>
          <div className="UserIdPosts">
            <TextField
              id="outlined-textarea"
              label="Name"
              multiline
              variant="outlined"
              onChange={handleChange}
              name="name"
              // defaultValue={localStorage.getItem("name")}
            />
          </div>
          <div className="typePosts">
            <TextField
              id="outlined-textarea"
              label="Password"
              multiline
              variant="outlined"
              onChange={handleChange}
              name="password"
              // defaultValue={localStorage.getItem("password")}
            />
          </div>
        </form>
      </div>
      <div>
        <div className="div-upload-picture">
          <input
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
          />
          {previewSource && (
            <img
              className="img-upload"
              src={previewSource}
              alt="chosen"
              style={{ height: "300px" }}
            />
          )}
        </div>

        <button className="buttonSubmit" onClick={handleSubmitFile}>
          Submit
        </button>
      </div>
    </>
  );
};
export default EditProfile;

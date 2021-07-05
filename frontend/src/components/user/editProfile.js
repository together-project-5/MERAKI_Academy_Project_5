import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import setUser from "../../reducers/login"

const EditProfile = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const [fileInputState, setFileInputState] = useState('')
  const [previewSource, setPreviewSource] = useState()

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file)

  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource)
    // const reader = new FileReader();
    // reader.readAsDataURL(selectedFile);
  }
  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch(`http://localhost:5000/user/edit/${localStorage.getItem("_IdUser")}`, {
        method: 'put',
        body: JSON.stringify({ data: base64EncodedImage, userData: userData }),
        headers: { 'Content-type': 'application/json' },
      }).then((result) => {
        console.log("result", result);
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div >
        <form >
          <input
            name="name"
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
          <input type="file" name="image" onChange=
            {handleFileInputChange} value={fileInputState} />
          <button onClick={handleSubmitFile}>Submit</button>
          {previewSource && (
            <img src={previewSource} alt="chosen"
              style={{ height: '300px' }} />
          )}
        </form>
      </div>
    </>
  );
}
export default EditProfile
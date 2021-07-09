import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setReportingPost } from "../../reducers/admin";
import "./admin.css";

const AdminBoard = () => {
    const dispatch = useDispatch();
    const [report, setReport] = useState(0)
    const state = useSelector((state) => {
        return {
            reportingPost: state.reportingPost.reportingPost,
        };
    });

    useEffect(() => {
        axios
            .get("http://localhost:5000/admin")
            .then((result) => {
                dispatch(setReportingPost(result.data));
            })
            .catch((err) => { throw err })

    }, []);

    const deletePost = (postId) => {
        let id = postId
        axios
            .delete(`http://localhost:5000/admin/${id}`)
            .then((result) => { })
            .catch((err) => { throw err })
    }

    const keepPost = (id, i) => {
        axios
            .post(`http://localhost:5000/post/report/${id}`, { report:0 },)
            .then((result) => { })
            .catch((err) => { throw err })
    }

    return (
        <>
            {state.reportingPost.map((post, i) => {
                return (
                    <>
                        <div className="reportingPost">
                            <div className="post-information">
                                <p className="post-title">{post.title}</p>
                                <p className="post-description">{post.description}</p>
                                <img className="post-image" src={post.url} />
                            </div>
                            <div className="adminButtons">
                                <button className="keepButton" onClick={() => {
                                    keepPost(post._IdPost, i)
                                }}>keep it</button>
                                <button className="deleteButton" onClick={() => {
                                    deletePost(post._IdPost);
                                }}>Delete</button>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default AdminBoard;
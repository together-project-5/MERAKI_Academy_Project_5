import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css"

const Messenger = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            messages: state.messages.messages,
        };
    });
    return (
        <>

        </>
    )
}

export default Messenger;

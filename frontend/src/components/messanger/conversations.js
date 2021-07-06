import axios from "axios";
import { useEffect, useState } from "react";

const Conversation = ({ conversation, currentUser }) => {


    return (
        <div className="conversation">
            <img
                className="conversationImg"
                src={
                    user?.profilePicture
                        ? PF + user.profilePicture
                        : PF + "person/noAvatar.png"
                }
                alt=""
            />
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}
export default Conversation
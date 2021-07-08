import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useSelector } from "react-redux";
// import AllPost from "../main/allPost/index"

let socket;
const CONNECTION_PORT = 'http://localhost:5000';

socket = io(CONNECTION_PORT);

const Chat = ({id}) => {
	
	const [loggedIn, setLoggedIn] = useState(false);
	const [room, setRoom] = useState('');
	const [userName, setUserName] = useState('');
	const [message, setMessage] = useState('');
	const [messageList, setMessageList] = useState([]);
	
	const state = useSelector((state) => {
		return {
			receiverId: state.chat.receiverId
		};
	});
	// console.log("id", state.receiverId);

	// useEffect(() => {
	// 	socket = io(CONNECTION_PORT);
	// }, [CONNECTION_PORT]);

	socket.on('receive_message', (data) => {
		setMessageList([...messageList, data]);
	});

	// useEffect(() => {}, [messageList]);

	const connectToRoom = () => {
		setLoggedIn(true);
		socket.emit('join_room', room); //raise event
	};

	const sendMessage = () => {
		const messageContent = {
			room,
			content: {
				author: userName,
				message,
			},
		};

		socket.emit('send_message', messageContent); //raise event
		setMessageList([...messageList, messageContent.content]);
		setMessage('');
	};

	return (
		<>
			<h1>aaaaaaa</h1>
			<div className="App">
				{!loggedIn ? (
					<div>
						<input
							type="text"
							placeholder="Username here ..."
							onChange={(e) => setUserName(e.target.value)}
						/>
						<input
							type="text"
							placeholder="RoomId here ..."
							onChange={(e) => setRoom(e.target.value)}
						/>
						<button onClick={connectToRoom}>Enter the Room</button>
					</div>
				) : (
					<>
						<div>
							{messageList.map((val, i) => {
								return (
									<h1 key={i}>
										{val.author} {val.message}
									</h1>
								);
							})}
						</div>
						<div>
							<input
								type="text"
								placeholder="Write your message here ..."
								onChange={(e) => setMessage(e.target.value)}
							/>
							<button onClick={sendMessage}>Send</button>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default Chat;

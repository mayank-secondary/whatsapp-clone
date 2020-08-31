import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import '../Styles/SidebarChat.css';
import db from '../Configurations/firebase';
import { Link } from 'react-router-dom';

const SidebarChat = ({ addNewChat, id, data: { name } = {} }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (id)
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())))
    }, [id]);

    const addNewChatAction = () => {
        const roomName = prompt("Enter new Room Name..");
        if (roomName) {
            db.collection('rooms').add({ name: roomName });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) :
        (
            <div className="sidebarChat" onClick={addNewChatAction}>
                <h2> Add New Chat</h2>
            </div>
        )
};

export default SidebarChat;

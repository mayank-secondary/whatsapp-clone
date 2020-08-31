import React, { useState, useEffect } from 'react';
import '../Styles/Chat.css';
import { useParams } from 'react-router-dom';
import db from '../Configurations/firebase';
import { useStateValue } from '../Configurations/StateProvider';
import firebase from 'firebase';
import ChatHeader from './Chat_Components/ChatHeader';
import ChatBody from './Chat_Components/ChatBody';
import ChatFooter from './Chat_Components/ChatFooter';

export default () => {
    const [input, setInput] = useState('');
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [{ user }] = useStateValue();
    const { roomId } = useParams();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot =>
                setRoomName(snapshot.data().name)
            );
            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))));
        };
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        if (roomId)
            db.collection('rooms').doc(roomId).collection('messages').add({
                name: user.displayName,
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        setInput('');
    }

    return (
        <div className='chat'>
            <ChatHeader roomId={roomId} roomName={roomName} messages={messages}/>
           <ChatBody messages={messages}/>
           <ChatFooter input={input} sendMessage={sendMessage} setInput={setInput} />
        </div>
    )
}

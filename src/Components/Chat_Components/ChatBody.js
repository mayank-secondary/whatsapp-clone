import React, { useEffect } from 'react';
import { useStateValue } from '../../Configurations/StateProvider';

function ChatBody({ messages }) {
    const [{ user }] = useStateValue();

    useEffect(() => {
        document.getElementsByClassName("chat__body")[0].scroll(0, 100000);
    }, [messages]);

    return (
        <div className="chat__body">
            {messages.map(message => {
                const { id, name, message: text, timestamp } = message;

                return (<p key={id} className={`chat__message ${name === user.displayName && 'chat__reciever'}`}>
                    {name !== user.displayName && <span className="chat__name">{name}</span>}
                    {text}
                    <span className="chat__timestamp">
                        {timestamp ? new Date(timestamp?.toDate()).toLocaleTimeString() : '...'}
                    </span>
                </p>)
            })}

        </div>
    )
}

export default ChatBody;

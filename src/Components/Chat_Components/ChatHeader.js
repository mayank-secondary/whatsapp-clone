import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons';

function ChatHeader({roomId, roomName, messages}) {
    return (
        <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${roomId}.svg`} />
                <div className="chat__headerInfo">
                    <h3>
                        {roomName}
                    </h3>
                    {messages && !!messages.length && <p>Last Seen at {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toLocaleTimeString()}</p>}
                </div>
                <div className="chat__headerRight">
                    <IconButton><SearchOutlined /></IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                </div>
            </div>
    )
}

export default ChatHeader;

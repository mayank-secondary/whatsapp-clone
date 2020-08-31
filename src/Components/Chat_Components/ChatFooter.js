import React from 'react';
import { InsertEmoticon, Mic } from '@material-ui/icons';

function ChatFooter({input, sendMessage, setInput}) {
    return (
        <div className="chat__footer">
        <InsertEmoticon />
        <form>
            <input value={input} onChange={({ target }) => setInput(target.value)} placeholder="Enter the Message..." type="text" />
            <button type="submit" onClick={sendMessage}>Send</button>
        </form>
        <Mic />
    </div>
    )
}

export default ChatFooter;

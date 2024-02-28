import React from 'react';
import SingleMessage from "./SingleMessage";
import {useSelector} from "react-redux";

const MessagesList = () => {

    const messages = useSelector(store => store.data.messages);

    return (
        <div className="msg-list d-flex g-20 j-c">
            {messages.map((x, i) => <SingleMessage key={i} message={x}/>)}
        </div>
    );
};

export default MessagesList;

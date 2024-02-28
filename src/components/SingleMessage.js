import React from 'react';

const SingleMessage = ({message}) => {
    return (
        <div className="single-msg">
            <p>{message.username}: {message.content}</p>
            <small>{message.time}</small>
        </div>
    );
};

export default SingleMessage;

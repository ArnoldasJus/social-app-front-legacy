import React from 'react';
import UserProfile from "../components/UserProfile";
import {useSelector} from "react-redux";
import MessagesList from "../components/MessagesList";

const ChatPage = () => {
    const user = useSelector(store => store.user.user);

    return (
        <div>
            {user && <UserProfile/>}
            <div className="chats">
                <MessagesList/>
            </div>
        </div>
    );
};

export default ChatPage;

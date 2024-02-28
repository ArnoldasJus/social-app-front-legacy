import React, {useRef} from 'react';
import UserProfile from "../components/UserProfile";
import {useSelector} from "react-redux";
import MessageForm from "../components/MessageForm";
import Notification from "../components/Notification";

const UserPage = () => {
    const selectedUser = useSelector(store => store.user.selectedUser);
    const user = useSelector(store => store.user.user);

    console.log(user);
    console.log(selectedUser);


    // const msgRef = useRef();
    //
    // const send = async () => {
    //
    // }

    return (
        <div className="user-page">
            {user && <UserProfile/>}

            <div className="user-card">
                <img src={selectedUser.image} alt=""/>
                <h1>{selectedUser.username}</h1>
            </div>
            <div className="chat-userpage">
                <h3>Send a message</h3>
                <MessageForm/>
            </div>
            <div>

            </div>

        </div>
    );
};

export default UserPage;


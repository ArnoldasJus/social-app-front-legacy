import React, {useRef} from 'react';
import http from "../plugins/http";
import {useDispatch, useSelector} from "react-redux";
import Notification from "./Notification";
import {setNotification} from "../features/notificationReducer";

const MessageForm = () => {
    const selectedUser = useSelector(store => store.user.selectedUser);
    const user = useSelector(store => store.user.user);
    const msgRef = useRef();
    const disp = useDispatch();

    let date = new Date().toLocaleString();

    const send = async () => {
        const message = {
            username: user.username,
            content: msgRef.current.value,
            selectedUser: selectedUser.username,
            time: date
        }

        const res = await http.postWithToken(message, "sendMessage")
        console.log(res)

        if (res.success) {
            disp(setNotification(res.message))
            setTimeout(() => {
                disp(setNotification(null))
            }, 2000);
        }
    }

    return (
        <div className="msg-form">
            <input ref={msgRef} type="text" placeholder="Your message.."/>
            <button onClick={send}>Send</button>
            <Notification/>
        </div>
    );
};

export default MessageForm;

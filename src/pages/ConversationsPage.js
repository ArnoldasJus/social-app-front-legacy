import React, {useEffect} from 'react';
import UserProfile from "../components/UserProfile";
import {useDispatch, useSelector} from "react-redux";
import MessagesList from "../components/MessagesList";
import {useNavigate} from "react-router-dom";
import http from "../plugins/http";
import {setUsers} from "../features/dataReducer";
import {setMessages} from "../features/dataReducer";

const ConversationsPage = () => {
    const user = useSelector(store => store.user.user);
    const nav = useNavigate();
    const disp = useDispatch();

    useEffect(() => {
        if(!user) return nav("/login")
        console.log(user)

        http.postWithToken({user},"myMessages").then(res => {
            console.log(res.data)
            disp(setMessages(res.data))
        })

    }, [])

    return (
        <div>
            {user && <UserProfile/>}
            <div className="chats">
                <MessagesList/>
            </div>
        </div>
    );
};

export default ConversationsPage;


import React, {useRef} from 'react';
import http from "../plugins/http";
import {setUser} from "../features/userReducer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Notification from "../components/Notification";
import {setNotification} from "../features/notificationReducer";

const LoginPage = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const disp = useDispatch();
    const nav = useNavigate();

    const auth = async () => {

        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        const res = await http.post(user, "login");
        console.log(res)


        if (res.success) {
            localStorage.setItem("token", res.data.token)
            disp(setUser(res.data.user))
            //socket.emit("addUser", res.data.user._id)
            disp(setNotification(null))
            nav("/user")
        } else {
            disp(setNotification(res.message))
        }
    }

    return (
        <div className="login d-flex f-c cont-min g-20">
            <h1>Login</h1>
            <input ref={usernameRef} type="text" placeholder="Username"/>
            <input ref={passwordRef} type="text" placeholder="Password"/>
            <button onClick={auth}>Submit</button>
            <Notification/>
        </div>
    );
};

export default LoginPage;

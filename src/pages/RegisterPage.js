import React from 'react';
import {useRef} from 'react';
import http from "../plugins/http";
//import {setUser} from "../features/userReducer";
import {useNavigate} from "react-router-dom";
import Notification from "../components/Notification";
import {setNotification} from "../features/notificationReducer";
import {useDispatch} from "react-redux";
//import {addPost} from "../features/dataReducer";

const RegisterPage = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordRepeatRef = useRef();

    const nav = useNavigate();
    const disp = useDispatch();

    const auth = async () => {
        if (passwordRef.current.value !== passwordRepeatRef.current.value) {
            document.getElementsByClassName(
                "notification"
            )[0].textContent = 'Passwords do not match';
            return
        }

        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        const res = await http.post(user, "register");
        disp(setNotification(res.message));

        console.log(res);

        if (res.success) {
            disp(setNotification(null))
            nav("/login")
        }
    }

    return (
        <div className="register d-flex f-c cont-min g-20">
            <h1>Register</h1>
            <input ref={usernameRef} type="text" placeholder="Username"/>
            <input ref={passwordRef} type="text" placeholder="Password"/>
            <input ref={passwordRepeatRef} type="text" placeholder="Repeat password"/>
            <button onClick={auth}>Submit</button>
            <Notification/>
        </div>
    );
};

export default RegisterPage;

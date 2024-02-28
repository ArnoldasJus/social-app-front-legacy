import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserProfile from "../components/UserProfile";
import http from "../plugins/http";
import {setNotification} from "../features/notificationReducer";
import Notification from "../components/Notification";
import {updateUser} from "../features/userReducer";

const ProfilePage = () => {
    const user = useSelector(store => store.user.user);
    const disp = useDispatch();

    const imgRef = useRef();
    const usrnRef = useRef();
    const passRef = useRef();

    const updateImg = async () => {
        const user = {
            image: imgRef.current.value
        }
        const res = await http.postWithToken(user, "updateImage");
        disp(updateUser(res.data))
        console.log(res)
    }

    const updateUsername = async () => {
        const user = {
            username: usrnRef.current.value
        }
        const res = await http.postWithToken(user, "updateUsername");

        if (res.success) {
            disp(updateUser(res.data));
            disp(setNotification(null));
        } else {
            disp(setNotification(res.message));
        }
        console.log(res)
    }

    const updatePassword = async () => {
        const user = {
            password: passRef.current.value
        }
        const res = await http.postWithToken(user, "updatePassword");

        if (res.success) {
            disp(updateUser(res.data));
            disp(setNotification(res.message));
        } else {
            disp(setNotification(res.message));
        }
        console.log(res)
    }

    return (
        <div className="profile-page">
            {user && <UserProfile/>}
            <div className="profile-inputs d-flex g-20 f-c a-c">
                <div className="d-flex g-20 a-c">
                    <img src={user.image} alt=""/>
                    <input ref={imgRef} type="text"/>
                    <button onClick={updateImg}>Update image</button>
                </div>
                <div className="d-flex g-20 a-c">
                    <h1>{user.username}</h1>
                    <input ref={usrnRef} type="text"/>
                    <button onClick={updateUsername}>Update username</button>
                </div>
                <div className="d-flex g-20 a-c">
                    <h1>*********</h1>
                    <input ref={passRef} type="text"/>
                    <button onClick={updatePassword}>Update password</button>
                </div>
                <Notification/>
            </div>
        </div>
    );
};

export default ProfilePage;

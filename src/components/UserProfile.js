import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {setUser} from "../features/userReducer";
import http from "../plugins/http";
import {setUsers} from "../features/dataReducer";

const UserProfile = () => {
    const user = useSelector(store => store.user.user);

    const nav = useNavigate();
    const disp = useDispatch();

    const logout = () => {
        localStorage.removeItem("token")
        disp(setUser(null))
        nav("/login")
        console.log(user)
    }

    return (
        <div className="user-profile toolbar d-flex j-b a-c g-20">
            <div className="d-flex g-20 a-c">
                <Link to="/app">
                    <img src={user.image} alt=""/>
                </Link>
                <h2>{user.username}</h2>
            </div>

            <div className="d-flex g-20 a-c">
                <Link className="link" to="/user">Profile</Link>
                <Link className="link" to="/users">All users</Link>
                <Link className="link" to="/conversations">Conversations</Link>
                <button className="link" onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default UserProfile;

import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import UserProfile from "../components/UserProfile";
import UsersList from "../components/UsersList";
import http from "../plugins/http";
import {setUsers} from "../features/dataReducer";

const IndexPage = () => {
    const user = useSelector(store => store.user.user);
    const nav = useNavigate();
    const disp = useDispatch();

    let date = new Date().toLocaleString();

    useEffect(() => {
        if(!user) return nav("/login")
        console.log(user)

        http.get("users").then(res => {
            console.log(res)
            disp(setUsers(res.data))
        })

    }, [])


    return (
        <div className="index">
            {user && <UserProfile/>}
            <h1>Welcome to Homepage!</h1>
            <div className="d-flex j-c">
                <UsersList/>
            </div>
            <div>
                <p>Last sync: {date}</p>
            </div>
        </div>
    );
};

export default IndexPage;

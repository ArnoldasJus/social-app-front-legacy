import React from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg";

const Toolbar = () => {
    return (
        <div className="toolbar d-flex j-b a-c">
            <Link to="/">
                <img src={logo} alt=""/>
            </Link>
            <div className="d-flex g-20">
                <Link className="link" to="/login">Login</Link>
                <Link className="link" to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Toolbar;

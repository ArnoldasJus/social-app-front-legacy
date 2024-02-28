import React from 'react';
import UsersList from "../components/UsersList";
import UserProfile from "../components/UserProfile";
import {useSelector} from "react-redux";

const AllUsersPage = () => {
    const user = useSelector(store => store.user.user);

    return (
        <div className="all-users-page">
            {user && <UserProfile/>}
            <UsersList/>
        </div>
    );
};

export default AllUsersPage;

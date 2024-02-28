import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import http from "../plugins/http";
import {setSelected} from "../features/userReducer";

const UsersList = () => {
    const users = useSelector(store => store.data.users);
    const user = useSelector(store => store.user.user);
    const disp = useDispatch();
    const [selectedUser, setSelectedUser] = useState("");

    const userSelect = async (name) => {
        setSelectedUser(name)

        const res = await http.postWithToken({name}, "setUser")


        if (res.success) {
            disp(setSelected(res.data))
        }

        console.log(res)
    }

    return (
        <div className="users-list g-20">

            {users.map((x, i) =>

            user.username === x.username ? "" :

                    // <div className="single-user"
                    //      key={i}
                    //      onClick={() => userSelect(x.username)}>
                    //     <Link to={"/user/" + x.username}>
                    //     <img src={x.image} alt=""/>
                    //     <h3>{x.username}</h3>
                    //     </Link>
                    // </div>

                <Link to={"/user/" + x.username} key={i}
                      onClick={() => userSelect(x.username)}>
                <div className="single-user">

                <img src={x.image} alt=""/>
                <h3>{x.username}</h3>

                </div>
                </Link>


            )}

        </div>
    );
};

export default UsersList;

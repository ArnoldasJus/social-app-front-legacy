// import React from 'react';
// import {Link} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import {setUser} from "../features/userReducer";
// import {useNavigate} from "react-router-dom";
//
//
// const Userbar = () => {
//     const user = useSelector(store => store.user.user);
//     const nav = useNavigate();
//     const disp = useDispatch();
//
//     const logout = () => {
//         localStorage.removeItem("token")
//         disp(setUser(null))
//         nav("/login")
//         console.log(user)
//     }
//
//     return (
//         <div className="toolbar d-flex j-b a-c">
//             <div className="d-flex g-20 a-c">
//                 <Link to="/">
//                     <img src={user.image} alt=""/>
//                 </Link>
//                 <h2>{user.username}</h2>
//             </div>
//
//             <div className="d-flex g-20 a-c">
//                 <Link className="link" to="/profile">Profile</Link>
//                 <Link className="link">All users</Link>
//                 <Link className="link">Conversations</Link>
//                 <Link onClick={logout} className="link">Logout</Link>
//             </div>
//         </div>
//     );
// };
//
// export default Userbar;

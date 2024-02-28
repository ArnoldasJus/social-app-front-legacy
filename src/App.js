import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {setUser} from "./features/userReducer";
import Toolbar from "./components/Toolbar";
import http from "./plugins/http";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";
import ProfilePage from "./pages/ProfilePage";
import AllUsersPage from "./pages/AllUsersPage";
import UserPage from "./pages/UserPage";
import ChatPage from "./pages/ChatPage";
import ConversationsPage from "./pages/ConversationsPage";

// import {io} from 'socket.io-client';
// const socket = io("http://localhost:4100");

function App() {
    const user = useSelector(store => store.user.user);
    const disp = useDispatch();
    const nav = useNavigate();

    console.log(user)

    useEffect(() => {
        http.postWithToken({}, "autologin").then(res => {
            if(res.success) {
                disp(setUser(res.data.user))
                // socket.emit("addUser", res.data.user._id)
                nav("/app")
            }
        })
    //
    //     socket.on("newPost", data => disp(addPost(data)))
    //     socket.on("postUpdate", post => {
    //         console.log(post)
    //         disp(updatePost(post))
    //     })
        //
    }, []);


  return (
    <div className="app">

            {!user && <Toolbar/>}
            <Routes>
                <Route path="/app" element={<IndexPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/user" element={<ProfilePage/>}/>
                <Route path="/users" element={<AllUsersPage/>}/>
                <Route path="/conversations" element={<ConversationsPage/>}/>
                {/*<Route path="/chat" element={<ChatPage/>}/>*/}
                <Route path="/user/:username" element={<UserPage/>}/>
            </Routes>
    </div>
  );
}

export default App;

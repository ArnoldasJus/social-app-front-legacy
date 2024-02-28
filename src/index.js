import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import messageReducer from "./features/messageReducer";
import userReducer from "./features/userReducer";
import dataReducer from "./features/dataReducer";
import notificationReducer from "./features/notificationReducer";
import {BrowserRouter} from "react-router-dom";

const store = configureStore({
    reducer: {
        data: dataReducer,
        user: userReducer,
        message: messageReducer,
        notification: notificationReducer
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

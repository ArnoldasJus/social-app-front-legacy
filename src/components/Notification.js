import React from 'react';
import {useSelector} from "react-redux";

const Notification = () => {
    const notification = useSelector(store => store.notification.notification);

    return (
        <div className="notification">
            {notification}
        </div>
    );
};

export default Notification;

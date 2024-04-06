import React, { useState } from "react";
import Styles from "./Notification.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeNotification } from "../../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const msgStyle = {
    color: notification && notification.type === "success" ? "green" : "red",
  };

  const handleRemove = () => {
    dispatch(removeNotification());
  };

  return (
    <div
      style={msgStyle}
      className={
        notification ? Styles.notification_display : Styles.notification_hide
      }
    >
      <h3>{notification && notification.message}</h3>{" "}
      <span className={Styles.notification_remove} onClick={handleRemove}>
        <i className="fa-solid fa-xmark"></i>
      </span>
    </div>
  );
};

export default Notification;

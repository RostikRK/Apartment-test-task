import React from "react";
import classes from "./DeleteButton.module.css";
import del_img from "../../images/x-button.png";

const DeleteButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.deleteButton}>
            <img src={del_img} height="35"/>
            {children}
        </button>
    );
};

export default DeleteButton;
import React from "react";
import classes from "./EditButton.module.css";
import edit_img from "../../images/pencil.png";

const EditButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.editButton}>
            <img src={edit_img} height="35"/>
            {children}
        </button>
    );
};

export default EditButton;
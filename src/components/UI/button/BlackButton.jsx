import React from "react";
import classes from "./BlackButton.module.css";

const BlackButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.BlackButton}>
            {children}
        </button>
    );
};

export default BlackButton;
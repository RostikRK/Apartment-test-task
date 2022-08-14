import React from "react";
import classes from "./BasicInput.module.css";

const BasicInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={classes.basicInput}
        />
    );
});

export default BasicInput;
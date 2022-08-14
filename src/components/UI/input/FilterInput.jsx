import React from "react";
import classes from "./FilterInput.module.css";

const FilterInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={classes.filterInput}
        />
    );
});

export default FilterInput;
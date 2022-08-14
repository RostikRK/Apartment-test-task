import React from "react";
import classes from "./SortSelect.module.css";


const SortSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            className={classes.sortSelect}
        >
            <option value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default SortSelect;
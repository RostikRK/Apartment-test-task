import React from "react";
import cl from "./AddingModal.module.css";

const AddingModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.AddingModal]

    // if we set visible we add an active class to it
    if (visible) {
        rootClasses.push(cl.active);
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default AddingModal;
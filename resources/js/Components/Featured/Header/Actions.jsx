import React from "react";

const Actions = ({ children }) => {
    return (
        <div className="flex items-center">
            <React.Fragment>
                {children}
            </React.Fragment>
        </div>
    );
};

export default Actions;
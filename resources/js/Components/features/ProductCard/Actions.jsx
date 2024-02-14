import React from "react";

const Actions = ({ children }) => {
    return (
        <div className="absolute top-4 right-4 flex space-x-2">
            <React.Fragment>
                {children}
            </React.Fragment>
        </div>
    );
};

export default Actions;
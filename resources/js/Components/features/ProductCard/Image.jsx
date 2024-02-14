import React from "react";

const Image = ({ path, alt }) => {
    return (
        <img src={path} alt={alt} className="rounded-lg"/>
    );
};

export default Image;
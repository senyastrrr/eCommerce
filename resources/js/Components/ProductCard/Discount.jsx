import React from "react";

const Discount = ({ discount }) => {
    return (
        <p className="text-lg text-gray-800">{discount}%</p>
    );
};

export default Discount;
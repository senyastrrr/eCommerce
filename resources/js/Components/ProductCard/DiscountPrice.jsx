import React from "react";

const DiscountPrice = ({ price }) => {
    return (
        <p className="text-lg text-gray-800 line-through">${price}</p>
    );
};

export default DiscountPrice;
import React from 'react';

const ProductCard = ({ children }) => {
  return (
    <div className="relative shadow-sm overflow-hidden md-4 lg-3 sm-6 p-1">
      {children}
    </div>
  );
};

export default ProductCard;

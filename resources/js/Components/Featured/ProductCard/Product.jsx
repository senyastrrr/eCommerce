import React from 'react';

const ProductCard = ({ children }) => {
  return (
    <div className="relative shadow-sm overflow-hidden md-4 lg-3 sm-6 p-1 rounded-lg hover:border-2 focus:border-0">
      {children}
    </div>
  );
};

export default ProductCard;

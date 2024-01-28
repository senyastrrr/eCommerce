import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="relative border rounded-md shadow-sm overflow-hidden md-4 lg-3 sm-6 p-1">
      <img src={image} alt={name} className="justify-center"/>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-lg text-gray-800">${price}</p>
      </div>

      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none p-2 bg-white rounded-full shadow"
        >
          <Heart className="w-5 h-5" />
        </button>

        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none p-2 bg-white rounded-full shadow"
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

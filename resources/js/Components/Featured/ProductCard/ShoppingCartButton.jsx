import React from "react";
import { ShoppingBag } from 'lucide-react';

const ShoppingCartButton = () => {
    return (
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none p-2 bg-white rounded-full shadow">
          <ShoppingBag className="w-5 h-5" />
        </button>
    );
};

export default ShoppingCartButton;
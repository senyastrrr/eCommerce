import React from "react";
import { Heart } from 'lucide-react';

const HeartButton = () => {
    return (
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none p-2 bg-white rounded-full shadow">
          <Heart className="w-5 h-5" />
        </button>
    );
};

export default HeartButton;
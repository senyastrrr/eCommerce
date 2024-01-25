import React from 'react';

const CategoryBox = ({ title, description, image }) => {

  return (
    <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${image})` }}>
      <div className="flex flex-col items-left justify-center p-8">
        <p className="text-2xl font-bold mb-2 text-gray-800">{title}</p>
        <p className="text-gray-500 mb-8">{description}</p>
      </div>
    </div>
  );
};

export default CategoryBox;
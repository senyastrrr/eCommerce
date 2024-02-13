import React from "react";

const asset = (path) => `/storage/images/${path}`;

const ImagesContainer = ({ images }) => {
    return (
        <div className="flex flex-col flex-wrap gap-12 hidden md:flex">
            {images.map((image, index) => (
                <div key={index} style={{ width: 100, height: 100 }}>
                    <img src={asset(image.image)} alt={`image-${index}`} />
                </div>
            ))}
        </div>
    );
};

export default ImagesContainer;

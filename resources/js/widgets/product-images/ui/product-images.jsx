import React from 'react';

const asset = (path) => `/storage/images/${path}`;

export function ProductImages() {
    return (
        <div className="flex flex-col flex-wrap gap-12 hidden md:flex">
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} style={{ width: 100, height: 100 }}>
                    <img src={asset(`product-0${index + 1}.jpg`)} alt={`image-${index}`} />
                </div>
            ))}
        </div>
    );
}
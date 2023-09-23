import React from 'react';
import './Slider.css';

const Slider = ({ items }) => {
  return (
    <div className="slider bg-gray-500 text-white py-0 max-w-100%">
      <div className="slider-inner flex flex-row space-x-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="slider-item bg-gray-500 text-center px-4 py-2 rounded-md flex flex-row space-x-4"
          >
            {item.map((image, imageIndex) => (
              <img
                key={imageIndex}
                src={image}
                alt={`Image ${imageIndex + 1}`}
                className="w-16 h-16"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

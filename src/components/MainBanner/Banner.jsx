import React from 'react';

const Banner = ({ imageUrl, width, height }) => {
  const containerStyles = `w-${width} h-${height} flex items-center justify-center `;
  return (
    <div className={containerStyles}>
      <img
        src={imageUrl}
        alt="Banner Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;

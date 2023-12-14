import React, { useState, useEffect } from 'react';

const ImageRotator = () => {
  const imageUrls = [
    'https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492978d54274f9c464e4e4a_Easy%20claims%20process.png',
    'https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492e25a9666d44dc2898004_pazcare%20care%20crew.png',
    'https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492a2ddcd3d734145c2a684_more%20benefits.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rotateImages = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  // Automatically rotate images every 5 seconds
  const rotationInterval = setInterval(rotateImages, 10000);

  // Clean up the interval when the component is unmounted
  useEffect(() => {
    return () => clearInterval(rotationInterval);
  }, [rotationInterval]);

  return (
    <div className="image-rotator hidden md:block">
      <img
        src={imageUrls[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-[550px] h-[500px] mx-auto my-auto"
      />
    </div>
  );
};

export default ImageRotator;

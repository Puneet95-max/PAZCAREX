import React, { useState, useEffect } from 'react';

const Img = () => {
  const imageUrls = [
   'https://assets-global.website-files.com/6145f7146a1337faae24d53f/6492a93e7470332152020468_benefits-management.png',
   'https://assets-global.website-files.com/6145f7146a1337faae24d53f/650be861e0a10b45d1866874_claims%20analytic.png',
    'https://assets-global.website-files.com/6145f7146a1337faae24d53f/6493ed1e5df34d5000b188f2_hrms%20integration.png',
  ]

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
    <div className="image-rotator">
      <img
        src={imageUrls[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-[550px] h-[500px] mx-auto my-auto"
      />
    </div>
  );
};

export default Img;

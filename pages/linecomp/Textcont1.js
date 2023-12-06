import React, { useState, useEffect } from 'react';

const Textcont1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the div after 10 seconds
    const showTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    // Hide the div after another 10 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 20000);

    // Cleanup the timeouts to avoid memory leaks
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);
  return (
    <main style={{ display: isVisible ? 'block' : 'none', padding: '10px', }}

      className='bg-purple-950'>

      <div className='text-xl font-thin'>
        Raise and track claims on the app with ease
      </div>

      <div className='flex flex-col w-full'>
        <div className='flex w-full'>
          <div className='w-1/2 text-xl my-1 font-bold flex items-center'>
            <span className='mr-1'><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648b0fb209b094066061d37b_green-tick.svg" loading="lazy" alt="Green Tick" /></span>
            <p>instant clamins filling</p>
          </div>
          <div className='w-1/2 text-xl mx-3 my-1 font-bold flex items-center'>
            <span className='mr-1'><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648b0fb209b094066061d37b_green-tick.svg" loading="lazy" alt="Green Tick" /></span>
            <p>Fewer chances of errors</p>
          </div>
        </div>
        <div className='flex  w-full'>
          <div className='w-1/2 text-xl my-1 font-bold flex items-center' >
            <span className='mr-1'><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648b0fb209b094066061d37b_green-tick.svg" loading="lazy" alt="Green Tick" /></span>
            <p>Reduced Paperwork</p>
          </div>
          <div className='w-1/2 text-xl mx-3 my-1 font-bold flex items-center'>
            <span className='mr-1'><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/648b0fb209b094066061d37b_green-tick.svg" loading="lazy" alt="Green Tick" /></span>
            <p>  24/7 Accessibilty</p>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Textcont1;

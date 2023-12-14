import React, { useState, useEffect } from 'react';

const Text2 = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the div after 10 seconds
        const showTimeout = setTimeout(() => {
            setIsVisible(true);
        }, 20000);

        // Hide the div after another 10 seconds
        const hideTimeout = setTimeout(() => {
            setIsVisible(false);
        }, 30000);

        // Cleanup the timeouts to avoid memory leaks
        return () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
        };
    }, []);
    return (
        <main style={{ display: isVisible ? 'block' : 'none', padding: '10px', }}

            className='bg-purple-200'>

            <div className='text-xl font-thin'>
                Real-time access to your employee's claims status and benefits usage.
            </div>

            <div className='flex  w-full'>
                <div className='flex w-full'>
                    <div className='w-1/2 text-xl my-2 font-bold flex items-center '>
                        <span className='mr-1'><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/649abb9a6a6ce36c69c18880_pink-tick.svg" loading="lazy" alt="Green Tick" /></span>
                        <p className=''>Real-time updates


                        </p>
                    </div>
                    <div className='w-1/2 text-xl mx-3 my-2 font-bold flex items-center'>
                        <span className='mr-1'><img src="https://assets-global.website-files.com/6145f7146a1337faae24d53f/649abb9a6a6ce36c69c18880_pink-tick.svg" loading="lazy" alt="Green Tick" /></span>
                        <p>Efficient planning</p>
                    </div>
                </div>

            </div>

        </main>
    );
};

export default Text2;

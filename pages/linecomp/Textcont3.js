import React, { useState, useEffect } from 'react';

const Textcont3 = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the div after 10 seconds
        const showTimeout = setTimeout(() => {
            setIsVisible(true);
        }, 30000);

        // Hide the div after another 10 seconds
        const hideTimeout = setTimeout(() => {
            setIsVisible(false);
        }, 40000);

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
                Insurance, food wallet, wellness - one app that solves all your employee benefits needs.
            </div>



        </main>
    );
};

export default Textcont3;

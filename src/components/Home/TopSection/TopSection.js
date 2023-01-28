import React from 'react';
import "animate.css/animate.min.css";

const TopSection = () => {
    return (
        <div className='top-section'>
            <div className='w-1/2'>
                <p className='text-3xl md:text-4xl lg:text-5xl animate__fadeInDownBig animate__animated mb-3 md:mb-5 lg:mb-8'>Welcome To</p>
                <p className='text-3xl md:text-4xl lg:text-5xl animate__fadeInRightBig animate__animated mb-3 md:mb-5 lg:mb-8'>Crown Cinema</p>
                <p className='text-yellow-300'>Cinema is a mirror of life, and it is a powerful medium through which we can tell stories, express emotions and ideas, and explore the human experience</p>
            </div>
            <div className='w-1/2 text-center'>
                <a href="#movies"><button className='button'>GET STARTED</button></a>
            </div>
        </div>
    );
};

export default TopSection;
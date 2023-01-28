import React, { useEffect, useState } from 'react';
import "animate.css/animate.min.css";
import PulseLoader from 'react-spinners/PulseLoader';

const About = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    if (loading) {
        return <div className='mt-20 text-center'> <PulseLoader color="#8351bc" /></div>
    }
    return (
        <div>
            <h2 className='text-center text-3xl md:text-4xl lg:text-5xl mt-20 animate__rubberBand animate__animated'>About coming soon.</h2>
        </div>
    );
};

export default About;
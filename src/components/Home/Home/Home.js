import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import Shows from '../Shows/Shows';
import TopSection from '../TopSection/TopSection';
import 'animate.css';
import Footer from '../../Footer/Footer';

const Home = () => {
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
        <div className='animate__animated animate__fadeIn'>
            <TopSection />
            <Shows />
            <Footer />
        </div>
    );
};

export default Home;
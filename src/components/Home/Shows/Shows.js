import React, { useEffect, useState } from 'react';
import Show from './Show';

const Shows = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => {
                setShows(data)
                localStorage.removeItem('showData')
            })
    }, [])

    return (
        <div className='my-8 md:my-16 lg:my-20' id='movies'>
            <h2 className='text-center text-xl md:text-2xl lg:text-3xl font-bold mb-4'>Movie collection</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mx-auto px-8 md:px-10 lg:px-12'>
                {
                    shows.map((show, i) => <Show key={i} show={show}></Show>)
                }
            </div>
        </div>
    );
};

export default Shows;
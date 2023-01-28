import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const Show = ({ show }) => {
    const { image, name, genres, runtime, language } = show.show;

    const handleDataSave = (data) => {
        localStorage.setItem('showData', JSON.stringify(data))
    }

    return (
        <div>
            <div className='relative mx-auto border-2 border-orange-500 rounded-xl flex overflow-hidden bg-orange-300 hover:bg-blue-200 hover:border-blue-400 transition duration-1000 ease-in-out'>
                <div className='w-1/2 h-[280px] flex items-center'>
                    {
                        image?.medium ?
                            <PhotoProvider>
                                <PhotoView src={image.medium}>
                                    <img src={image.medium} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                            :
                            <p className='mx-auto'>Image not available.</p>
                    }
                </div>
                <div className='w-1/2 p-4 md:p-6 ld:p-8'>
                    <p className='text-xl font-semibold mb-4'>{name}</p>
                    <p className='break-words'>Genre: {genres.map((g, i) => <span key={i} className="mr-1">{g}</span>)}</p>
                    <p>Runtime: {runtime}</p>
                    <p>Language: {language}</p>
                    <Link to='/showDetails'><button onClick={() => handleDataSave(show.show)} className='card-button'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Show;
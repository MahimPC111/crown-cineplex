import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { PulseLoader } from 'react-spinners';

const ShowDetails = () => {
    const data = JSON.parse(localStorage.getItem('showData'))
    const { image, name, genres, runtime, language, rating, schedule, summary, network, status } = data;
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])


    // Modal toggle function
    const openModal = () => {
        setModalOpen(true);
        document.getElementById('container').style.filter = 'blur(10px)'
    }

    const closeModal = () => {
        setModalOpen(false);
        document.getElementById('container').style.filter = 'blur(0)'
    }

    // info from modal form

    const handleSubmit = (event) => {
        event.preventDefault();
        closeModal();
        const form = event.target;

        const bookingInfo = {
            name,
            days: schedule.days[0],
            time: schedule.time,
            language,
            userName: form.userName.value,
            email: form.email.value,
            number: form.phoneNumber.value
        }
        toast.success('Show successfully booked!')
        localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo))
        form.reset();
    }

    if (loading) {
        return <div className='mt-20 text-center'> <PulseLoader color="#8351bc" /></div>
    }

    return (
        <div>

            {/* Show details section */}

            <div id='container' className='py-8 md:py-12 lg:py-16'>
                <div className='w-3/4 md:w-10/12 lg:w-3/4 mx-auto border-2 border-cyan-300 rounded-xl flex flex-col md:flex-row overflow-hidden bg-orange-300'>
                    <div className='w-full md:w-1/2 flex items-center'>
                        {
                            image?.original ?
                                <img className='min-h-full' src={image.original} alt='' />
                                :
                                <p className='mx-auto'>Image not available.</p>
                        }
                    </div>
                    <div className='w-full md:w-1/2 p-4 md:p-6 ld:p-8'>
                        <p className='text-center text-2xl md:text-4xl lg:text-5xl font-semibold mb-4'>{name}</p>
                        <p className='break-words'><b>Genre:</b> {genres.map((g, i) => <span key={i} className="mr-1">{g}</span>)}</p>
                        <p><b>Runtime:</b> {runtime}</p>
                        <p><b>Language:</b> {language}</p>
                        <p><b>Rating:</b> {rating?.average ? rating.average : "N/A"}</p>
                        <p><b>Schedule:</b> {schedule.days} , {schedule.time}</p>
                        <p><b>Country:</b> {network?.country ? network.country.name : 'N/A'}</p>
                        <p><b>Status:</b> {status}</p>
                        <p><b>Summery:</b> {summary}</p>
                        <button className="card-details-button" onClick={openModal}>
                            Book Now!
                        </button>
                    </div>
                </div>
            </div>

            {/* For modal */}

            <div className={`w-3/4 md:w-1/2 mx-auto ${modalOpen ? 'modalActive' : 'modal'}`}>
                <div className="flex items-center justify-center" style={{ display: modalOpen ? 'block' : 'none' }}>
                    <div className="rounded-lg p-6 bg-slate-200">

                        <button className="text-black text-lg font-bold absolute right-2 top-2 py-1 px-3 rounded-lg bg-red-500" onClick={closeModal}>✕</button>

                        <form onSubmit={handleSubmit} className='mt-12 '>
                            <input defaultValue={name} disabled type="text" className="input w-full" />
                            <input defaultValue={schedule.days + schedule.time} disabled type="text" className="input w-full" />
                            <input defaultValue={language} disabled type="text" className="input w-full" />
                            <input name='userName' type="text" className="input w-full" placeholder='Name' required />
                            <input name='email' type="email" className="input w-full" placeholder='Email' required />
                            <input name='phoneNumber' type="number" placeholder="Phone number" className="input w-full" required />
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Assets/watch.jpg'
import useReviews from '../../hooks/custom';
import Review from '../Review/Review';

const Home = () => {
    const [reviews] = useReviews([]);
    const newReviews = reviews.slice(0, 3);

    return (
        <>

            <div className='grid md:grid-cols-3 grid-cols-2 md:mb-20'>
                <div className='md:col-span-2 m-16 col-span-2'>
                    <h1 className='md:text-8xl sm:text-6xl text-3xl font-bold '>Your next watch <br /><span className='text-teal-700'>Your best watch</span></h1>
                    <p className='mt-10 text-xl md:text-2xl  font-sans font-medium'>Spike Smart Watch, Fitness Tracker for Android Phones, Fitness Tracker with Heart Rate and Sleep Monitor, Activity Tracker with IP67 Waterproof Pedometer Smartwatch with Step Counter, Blue</p>
                </div>
                <div className='m-6 col-span-2 md:col-span-1'>
                    <img src={image} alt="" />
                </div>
            </div>
            <h3 className='text-3xl md:text-5xl text-center font-medium m-8'>Customer Reviews(3)</h3>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    newReviews.map(review => <Review key={review._id} review={review}></Review>)
                }

            </div>
            <div className='text-center m-10'>
                <Link to='/reviews'><button className='bg-teal-700 text-yellow-50 py-2 px-16 text-2xl font-sans font-medium rounded-lg hover:text-red-700'>See all reviews</button> </Link>
            </div>

        </>
    );
};

export default Home;
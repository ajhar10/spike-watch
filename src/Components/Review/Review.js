import React from 'react';

const Review = ({ review }) => {
    const { name, rating, opinion } = review
    return (
        <div className='border-solid border-2 border-gray-300 rounded-md m-8'>
            <h4 className='text-2xl font-mono m-5'> {name}</h4>
            <p className='font-sans ml-5'><span className='font-semibold text-xl'>Review:</span> {opinion}</p>
            <p className='mt-3 mb-3 text-xl'><span className='font-semibold ml-5 '>Rating: </span> {rating}</p>
        </div>
    );
};

export default Review;
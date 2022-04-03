import useReviews from '../../hooks/custom';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews([])
    return (
        <>
            <h3 className='text-4xl text-center font-medium text-teal-800 m-5'>What our customers say!</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </>
    );
};

export default Reviews;
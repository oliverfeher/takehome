import React from 'react';
import { customerReviewsData } from '../../data-module.js';

import quoteLeft from '../../Assets/icons/quote-left-solid.png';
import ratingStar from '../../Assets/icons/rating-star-yellow.svg';
import emptyStar from '../../Assets/icons/empty-star-yellow.svg';
import halfStar from '../../Assets/icons/half-star-yellow.svg';

const CustomerReviews = () => {
    return (
        <div>
            
            <h1>Customer Reviews</h1>
            
            <h2>{customerReviewsData.maScore}/5</h2>
            <img src={ratingStar} alt="star"/>
            <img src={emptyStar} alt="star"/>
            <img src={halfStar} alt="star"/>
            
            <h4>{customerReviewsData.title}</h4>
            {customerReviewsData.reviews.map((review, index) =>
                <div key={index}>
                    <img src={quoteLeft} alt="large left quotation" />
                    <p>{review.quote}</p>
                    <p>{review.quoteSource}</p>
                </div>
            )}
        </div>
    )
}

export default CustomerReviews 
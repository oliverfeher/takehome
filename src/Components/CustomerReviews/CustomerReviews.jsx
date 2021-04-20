import React from 'react';
import './customer-reviews.css';
import { customerReviewsData } from '../../data-module.js';

import heroImage from '../../Assets/images/customerReviewsHeroImage.jpeg';
import quoteLeft from '../../Assets/icons/quote-left-solid.png';
import emptyStar from '../../Assets/icons/empty-star-yellow.svg';
// import halfStar from '../../Assets/icons/half-star-yellow.svg';
// import ratingStar from '../../Assets/icons/rating-star-yellow.svg';

const CustomerReviews = () => {
    return (
        <div>
            <img className="hero-image" src={heroImage} alt="grey mattress" />
            
            <div className="customer-review-frame">
                <h1>Customer Reviews</h1>

                <h2 className="rating">{customerReviewsData.maScore}/5
                    <img src={emptyStar} alt="star"/>
                    <img src={emptyStar} alt="star"/>
                    <img src={emptyStar} alt="star"/>
                    <img src={emptyStar} alt="star"/>
                    <img src={emptyStar} alt="star"/>
                </h2>

                <h4>{customerReviewsData.title}</h4>

                {customerReviewsData.reviews.map((review, index) =>
                    <div className="customer-review-card" key={index}>
                        <img className="quote-left" src={quoteLeft} alt="large left quotation" />
                        <p dangerouslySetInnerHTML={{__html:review["quote"]}}></p>
                        <p>{review.quoteSource}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomerReviews 
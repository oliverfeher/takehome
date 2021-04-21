import React, {useState} from 'react';
import './customer-reviews.css';
import { customerReviewsData } from '../../data-module.js';

import heroImage from '../../Assets/images/customerReviewsHeroImage.jpeg';
import quoteLeft from '../../Assets/icons/quote-left-solid.png';
import emptyStar from '../../Assets/icons/empty-star-yellow.svg';
import halfStar from '../../Assets/icons/half-star-yellow.svg';
import fullStar from '../../Assets/icons/rating-star-yellow.svg';

const CustomerReviews = () => {
    let rating = customerReviewsData.maScore || 0;
    // let rating = 3.1 || 0;
    let stars = [0,0,0,0,0];

    return (
        <div className="reviews-grid">
            <div className="hero-wrapper">
                <img className="hero-image" src={heroImage} alt="grey mattress" />
            </div>
            
            <div className="customer-review-frame">
                <h1>Customer Reviews</h1>

                {/* useState to fill in the stars based on maScore use case statements*/}
                <div>
                    <h2 className="rating">{rating}/5
                        {stars.map((star, index) => {
                            return(
                            <div key={index}>
                                <img src={emptyStar} alt="empty star"/>
                                <img src={halfStar} alt="half star"/>
                                <img src={fullStar} alt="full star"/>
                            </div>
                            )
                        })}
                    </h2>
                </div>

                <h4>{customerReviewsData.title}</h4>
                <div className="review-wrapper">
                    {customerReviewsData.reviews.map((review, index) =>
                        <div className="customer-review-card" key={index}>
                            <img className="quote-left" src={quoteLeft} alt="large left quotation" />
                            <div className="comment-wrapper">
                                <p dangerouslySetInnerHTML={{__html:review["quote"]}}></p>
                                <p>{review.quoteSource}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews 
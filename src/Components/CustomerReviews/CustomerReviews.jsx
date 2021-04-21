import React from 'react';
import './customer-reviews.css';
import { customerReviewsData } from '../../data-module.js';

import heroImage from '../../Assets/images/customerReviewsHeroImage.jpeg';
import quoteLeft from '../../Assets/icons/quote-left-solid.png';
import emptyStar from '../../Assets/icons/empty-star-yellow.svg';
import halfStar from '../../Assets/icons/half-star-yellow.svg';
import fullStar from '../../Assets/icons/rating-star-yellow.svg';

const CustomerReviews = () => {
    const rating = customerReviewsData.maScore || 0;
    // const rating = 3.3 || 0;

    //starRating rounds the rating to the nearest 0(emptyStar), .5(halfStar), or 1.0(fullStar)
    const starRating = (Math.round(rating * 2) / 2).toFixed(1);
    
    const getStar = (starRating) => {
       switch (starRating) {
            case 100:
                return fullStar;
            case 50:
                return halfStar;
            default:
                return emptyStar;
       }
    }
    // const getStars = (starRating) => {
    //     switch (parseFloat(starRating)) {
    //         case 5:
    //             return [100, 100, 100, 100, 100];
    //         case 4.5:
    //             return [100, 100, 100, 100, 50];
    //         case 4:
    //             return [100, 100, 100, 100, 0];
    //         case 3.5:
    //             return [100, 100, 100, 50, 0];
    //         case 3:
    //             return [100, 100, 100, 0, 0];
    //         case 2.5:
    //             return [100, 100, 50, 0, 0];
    //         case 2:
    //             return [100, 100, 0, 0, 0];
    //         case 1.5:
    //             return [100, 50, 0, 0, 0];
    //         case 1:
    //             return [100, 0, 0, 0, 0];
    //         case 0.5:
    //             return [50, 0, 0, 0, 0];
    //         default:
    //             return [0, 0, 0, 0, 0];
    //     }
    // }
    const getStars = (rating) => {
        const stars = [];
        const [full, part] = parseFloat(rating).toString().split(".");
        for (let i = 0; i < full; i++) stars.push(100);
            if (part) stars.push(50);
        for (let i = full; i < (part ? 4 : 5); i++) stars.push(0);

        return stars;
    }

    return (
        <div className="reviews-grid">
            <img className="hero-image" src={heroImage} alt="grey mattress" />
            
            <div className="customer-review-frame">
                <h1>Customer Reviews</h1>
                    
                <div>
                    <h2 className="rating"><strong>{rating}</strong>/5
                            {
                                getStars(starRating).map((rating, index) => (
                                    <img key={index} src={getStar(rating)} alt="review stars"/>
                                ))
                            }
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
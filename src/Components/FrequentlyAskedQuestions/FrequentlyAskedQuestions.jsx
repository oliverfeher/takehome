import React from 'react';
// import { Link } from 'react-router-dom';
import { frequentlyAskedData } from '../../data-module.js';

import rightArrow from '../../Assets/icons/right-arrow-white.png';
import faqRightImage from '../../Assets/images/faqRightImage.jpeg';

const FrequentlyAskedQuestions = () => {
    return (
        <div>
            <h1>Frequently Asked Questions</h1>

            {frequentlyAskedData.questions.map((question, index) =>
                <div key={index}>
                    <h2> + - {question.question}</h2>
                    <p>{question.answer}</p>
                </div>
            )}

            {/* <Link to={frequentlyAskedData.ctas[0].link}> */}
                <button>
                    {frequentlyAskedData.ctas[0].title}
                    <img src={rightArrow} alt="right arrow" />
                </button>
            {/* </Link> */}
            <img src={faqRightImage} alt="bed with pillows" />
        </div>
    )
}

export default FrequentlyAskedQuestions
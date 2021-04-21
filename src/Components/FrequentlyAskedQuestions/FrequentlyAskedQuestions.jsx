import React, { useState } from 'react';
import './frequently-asked-questions.css';
// import { Link } from 'react-router-dom';
import { frequentlyAskedData } from '../../data-module.js';

import rightArrow from '../../Assets/icons/right-arrow-white.png';
import faqRightImage from '../../Assets/images/faqRightImage.jpeg';

const FrequentlyAskedQuestions = () => {
    
    const [textToggle, textToggleState] = useState(true)
    
    return (
        <div>
            <div className="faq-bg"></div>
            <div className="faq-container">
            <h1>Frequently Asked Questions</h1>

            {frequentlyAskedData.questions.map((question, index) =>
                <div key={index}>
                    { textToggle ?
                        <h3 style={{ cursor: 'pointer' }} onClick={ () => textToggleState(!textToggle)}>+ {question.question}</h3>
                        :
                        <div>
                            <h3 style={{ cursor: 'pointer' }} onClick={ () => textToggleState(!textToggle)}>- {question.question}</h3>
                            <p>{question.answer}</p>
                        </div>
                    }
                </div>
            )}

            {/* <Link to={frequentlyAskedData.ctas[0].link}> */}
                <button>
                    <a href={frequentlyAskedData.ctas[0].link}>{frequentlyAskedData.ctas[0].title}</a>
                    <img src={rightArrow} alt="right arrow" />
                </button>
            {/* </Link> */}
            <img src={faqRightImage} alt="bed with pillows" />
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestions
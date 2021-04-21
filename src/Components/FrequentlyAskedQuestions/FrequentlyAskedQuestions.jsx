import React, { useState } from 'react';
import './frequently-asked-questions.css';
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

                {/* use index to show individual answer onClick  */}
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

                    <a className="info-btn" href={frequentlyAskedData.ctas[0].link}>
                        <button>
                            {frequentlyAskedData.ctas[0].title}
                            <img src={rightArrow} alt="right arrow" />
                        </button>
                    </a>
            </div>
            <img src={faqRightImage} alt="bed with pillows" />
        </div>
    )
}

export default FrequentlyAskedQuestions
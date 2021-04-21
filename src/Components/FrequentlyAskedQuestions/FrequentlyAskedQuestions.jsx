import React, { useState } from 'react';
import './frequently-asked-questions.css';
import { frequentlyAskedData } from '../../data-module.js';

import rightArrow from '../../Assets/icons/right-arrow-white.png';
import faqRightImage from '../../Assets/images/faqRightImage.jpeg';

const FrequentlyAskedQuestions = () => {
    
    const [showAnswer, setShowAnswer] = useState({});

    const toggleAnswer = (index) => {
        setShowAnswer(prev => Boolean(!prev[index]) ? {...prev, [index]: true} : {...prev, [index]: false});
    }
    
    return (
        <div className="faq-grid">
            <div className="faq-container">
                <div className="faq-questions">
                    <h1>Frequently Asked Questions</h1>

                    {frequentlyAskedData.questions.map((question, index) =>
                        <div key={index}>
                            { question.answer ? <h3 onClick={() => toggleAnswer(index)}>+  {question.question}</h3> : null }
                            { showAnswer[index] ?  <p className="faq-answer"> {question.answer}</p> : null}
                        </div>
                    )}

                    <a className="info-btn" href={frequentlyAskedData.ctas[0].link}>
                        <button>
                            {frequentlyAskedData.ctas[0].title}
                            <img src={rightArrow} alt="right arrow" />
                        </button>
                    </a>
                </div>
            </div>
            <img className="faq-image" src={faqRightImage} alt="bed with pillows" />
        </div>
    )
}

export default FrequentlyAskedQuestions
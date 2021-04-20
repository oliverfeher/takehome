import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { frequentlyAskedData } from '../../data-module.js';

import rightArrow from '../../Assets/icons/right-arrow-white.png';
import faqRightImage from '../../Assets/images/faqRightImage.jpeg';

const FrequentlyAskedQuestions = () => {
    
    const [textToggle, textToggleState] = useState(true)
    
    return (
        <div>
            <h1>Frequently Asked Questions</h1>

            {frequentlyAskedData.questions.map((question, index) =>
                <div key={index}>
                    <h2>{question.question}</h2>
                    { textToggle ?
                        <button onClick={ () => textToggleState(!textToggle)}>+</button>
                        :
                        <div>
                            <button onClick={ () => textToggleState(!textToggle)}>-</button>
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
    )
}

export default FrequentlyAskedQuestions
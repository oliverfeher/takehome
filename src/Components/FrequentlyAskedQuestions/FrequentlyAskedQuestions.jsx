import React from 'react';
import { frequentlyAskedData } from '../../data-module.js';

const FrequentlyAskedQuestions = () => {
    console.log('FAQs', frequentlyAskedData)
    return (
        <div>
            <h1>Frequently Asked Questions</h1>
        </div>
    )
}

export default FrequentlyAskedQuestions
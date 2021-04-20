import React from 'react';
import './App.css';

import CustomerReviews from './Components/CustomerReviews/CustomerReviews.jsx';
import FrequentlyAskedQuestions from './Components/FrequentlyAskedQuestions/FrequentlyAskedQuestions.jsx';

function App() {
  return (
    <div className="App">
      <CustomerReviews />
      <FrequentlyAskedQuestions />
    </div>
  );
}

export default App;

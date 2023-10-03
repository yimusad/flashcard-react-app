// Flashcard.jsx
import React, { useState } from 'react';
import './Flashcard.css'; 
import GuessForm from './GuessForm';

function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleUserGuess = (guess) => {
    if (guess.toLowerCase() === flashcard.answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setFlip(true);
  };

  const handleCardClick = () => {
    // Only flip the card back to front if it's currently on the back side.
    if (flip) setFlip(false);
  };

  return (
    <div className={`card-container`}>
      <div 
        className={`card ${flashcard.category.toLowerCase()} ${flip ? 'flip' : ''}`} 
        onClick={handleCardClick}
      >
        <div className="front">
          <p>{flashcard.question}</p>
        </div>
        <div className="back">
          <p>{flashcard.answer}</p>
        </div>
      </div>

      {!flip && <GuessForm onGuess={handleUserGuess} />}

      {isCorrect !== null && (
        <div className={isCorrect ? "correct-feedback" : "incorrect-feedback"}>
          {isCorrect ? "Correct!" : "Incorrect!"}
        </div>
      )}
    </div>
  );
}


export default Flashcard;



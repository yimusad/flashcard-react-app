import React, { useState } from 'react';
import Flashcard from './Flashcard.jsx';

function FlashcardList({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentIndex);
    setCurrentIndex(newIndex);
  };
  
  return (
    <div className="flashcard-container">
      <Flashcard flashcard={flashcards[currentIndex]} />
      <div className="button-container">
        <button onClick={showNextCard}>Previous</button>
        <button onClick={showNextCard}>Next</button>
      </div>
    </div>
  );
}

export default FlashcardList;


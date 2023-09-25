import React, { useState } from 'react';
import Flashcard from './Flashcard.jsx';

function FlashcardList({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const showNextCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div>
      <Flashcard flashcard={flashcards[currentIndex]} />
      <button onClick={showNextCard}>Next</button>
    </div>
  );
}

export default FlashcardList;

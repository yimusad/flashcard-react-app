import React, { useState } from 'react';
import './Flashcard.css'; 

function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flashcard.category.toLowerCase()} ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
      <div className="front">{flashcard.question}</div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}

export default Flashcard;


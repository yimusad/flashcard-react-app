// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <h1> hellur</h1>
      
//   )
// }

// export default App

import React from 'react';
import './App.css';
import FlashcardList from './components/FlashcardList.jsx';

function App() {
  const flashcards = [
    { id: 1, question: 'Question 1', answer: 'Answer 1' },
    { id: 2, question: 'Question 2', answer: 'Answer 2' },
  ];

  return (
    <div className="app">
      <h1>Flashcard App</h1>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;


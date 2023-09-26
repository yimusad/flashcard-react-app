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
    { id: 1, question: 'What is the Capital of France?', answer: 'Paris', image: 'url-to-image', category: 'Europe' },
    { id: 2, question: 'What is the Capital of Germany?', answer: 'Berlin', image: 'url-to-image', category: 'Europe' },
    
    { id: 3, question: 'What is the Capital of Sudan?', answer: 'Khartoum', image: 'url-to-image', category: 'Africa' },
    { id: 4, question: 'What is the Capital of Egypt?', answer: 'Cairo', image: 'url-to-image', category: 'Africa' },
    
    { id: 5, question: 'What is the Capital of China?', answer: 'Beijing', image: 'url-to-image', category: 'Asia' }, 
    { id: 6, question: 'What is the Capital of Japan?', answer: 'Tokyo', image: 'url-to-image', category: 'Asia' },
    
    { id: 7, question: 'What is the Capital of the United States?', answer: 'Washington, D.C.', image: 'url-to-image', category: 'NorthAmerica' },
    { id: 8, question: 'What is the Capital of Canada?', answer: 'Ottawa', image: 'url-to-image', category: 'NorthAmerica' },
    
    { id: 9, question: 'What is the Capital of Brazil?', answer: 'Brasília', image: 'url-to-image', category: 'SouthAmerica' },
    { id: 10, question: 'What is the Capital of Argentina?', answer: 'Buenos Aires', image: 'url-to-image', category: 'SouthAmerica' },
    
    { id: 11, question: 'What is the Capital of Australia?', answer: 'Canberra', image: 'url-to-image', category: 'Australia' },
    { id: 12, question: 'What is the Capital of New Zealand?', answer: 'Wellington', image: 'url-to-image', category: 'Australia' }
    
];



  return (
    <div className="app">
      <h1>Flashcard App</h1>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;


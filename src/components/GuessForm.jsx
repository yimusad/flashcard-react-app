// GuessForm.jsx
import React, { useState } from 'react';

function GuessForm({ onGuess }) {
  const [userGuess, setUserGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuess(userGuess);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={userGuess} 
        onChange={(e) => setUserGuess(e.target.value)} 
        placeholder="Your guess here" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default GuessForm;

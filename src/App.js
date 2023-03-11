// Componentes
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

// REACT
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/words';

// Estilisation
import './App.css';
import './index.css';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [stage, setStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // Pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories.length))];

    console.log(category);

    // Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return {word, category};
    
  }

  // Start the secret world game
  const startGame = () => {
    setStage(stages[1].name);

    // Pick a random word and category
    const {word, category} = pickWordAndCategory();
    console.log(word, category);

    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

  }

  // Process de input
  const verifyLetter = () => {
    setStage(stages[2].name);
  }

  const retryGame = () => {
    setStage(stages[0].name);
  }

  return (
    <div className="App">
      {stage === stages[0].name && <StartScreen startGame={startGame} />}
      {stage === stages[1].name && 
      <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {stage === stages[2].name && <GameOver retryGame={retryGame} />}
    </div>
  );
}

export default App;

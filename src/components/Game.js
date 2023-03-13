// Imports do React
import { useEffect, useRef, useState } from "react";

// Estilisação
import "./Game.css";

const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, wrongLetters, guesses, guessedLetters, score }) => {
  console.log("letters da Game: ", letters);

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra</h1>
      <h3 className="tip">
        Dicas sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) => {
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span className="blankSquare" key={i}></span>
          );
          }
        )}
      </div>
      <div className="lettersContainer">
        <p>Tente adivinhar a letra:</p>
        <form>
          <input type="text" className="letter" maxLength= "1" required/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContaner">
        <p>Letras erradas:</p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  )
}

export default Game
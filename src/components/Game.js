// Estilisação
import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Advinhe a palavra</h1>
      <h3 className="tip">
        Dicas sobre a palavra: <span>Dica...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
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
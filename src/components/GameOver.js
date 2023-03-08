// Estilização
import "./GameOver.css";

const GameOver = ({ retryGame }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retryGame}>Tentar novamente</button>
    </div>
  )
}

export default GameOver
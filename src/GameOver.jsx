import React from 'react';
import GameState from "./GameState";

function GameOver({ gameState, onRefreshClick }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return (
        <div className="game-over-owins">
          <p>O Wins</p>
          <button onClick={onRefreshClick}>Play Again</button>
        </div>
      );
    case GameState.playerXWins:
      return (
        <div className="game-over-xwins">
          <p>X Wins</p>
          <button onClick={onRefreshClick}>Play Again</button>
        </div>
      );
    case GameState.draw:
      return (
        <div className="game-over">
          <p>Draw</p>
          <button onClick={onRefreshClick}>Play Again</button>
        </div>
      );
    default:
      return <></>;
  }
}

export default GameOver;

import './App.css';
import Board from './Board';
import { useState, useEffect } from 'react';
import Strike from './Strike';
import GameOver from './GameOver';
import GameState from './GameState';
import Tile from './Tile';

const P1 = 'X';
const P2 = 'O';


const winningcombinations = [
  {combo: [0,1,2], strikeClass: "strike-row-1"},
  {combo: [3,4,5], strikeClass: "strike-row-2"},
  {combo: [6,7,8], strikeClass: "strike-row-3"},

  {combo: [0,3,6], strikeClass: "strike-column-1"},
  {combo: [1,4,7], strikeClass: "strike-column-2"},
  {combo: [2,5,8], strikeClass: "strike-column-3"},

  {combo: [0,4,8], strikeClass: "strike-diagonal-1"},
  {combo: [2,4,6], strikeClass: "strike-diagonal-2"},

  
];


function checkWinner(Tiles, setStrikeClass, setGameState)
{
  for(const {combo, strikeClass} of winningcombinations)
  {
    const titleValue1 = Tiles[combo[0]]
    const titleValue2 = Tiles[combo[1]]
    const titleValue3 = Tiles[combo[2]]

    if(titleValue1 !== null && titleValue1 ==titleValue2 && titleValue1== titleValue3)
    {
      setStrikeClass(strikeClass);
      if (titleValue1 === P1) {
        setGameState(GameState.playerXWins);
      }
      else{
        setGameState(GameState.playerOWins);
      }
      return;
    }

  }
  const Filled = Tiles.every((Tile)=> Tile !== null);
  if (Filled){
    setGameState(GameState.draw)
  }

}

function App() {
  const [Tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] =useState(P1);
  const [strikeClass, setStrikeClass] =useState();
  const [gameState, setGameState] = useState(GameState.inProgress);
  const handleRefreshClick = () => {
    window.location.reload();
  };

  useEffect(()=>{
    checkWinner(Tiles, setStrikeClass, setGameState);
  },[Tiles] );
  
  const Click =(index)=> {

    if(gameState !== GameState.inProgress)
    {
      return;
    }
    if(Tiles[index] !== null) //To avoid duplication or switching of Tiles
    {
      return;
    }
    const newTiles = [...Tiles];
    newTiles [index] =playerTurn;
    setTiles(newTiles);
    if (playerTurn ===P1){
      setPlayerTurn(P2);
    }
    else{
      setPlayerTurn(P1);
    }
  }

  
  return (
    <div className = "Heading">
      <h1> Tic-Tac-Toe</h1>
      <Board playerTurn ={playerTurn} 
      Tiles={Tiles} 
      onTileClick={Click} 
      strikeClass={strikeClass}
      />
      <GameOver gameState= {gameState} onRefreshClick={handleRefreshClick}/>
     </div>
  );
}

export default App;

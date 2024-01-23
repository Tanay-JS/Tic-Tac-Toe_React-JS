import Tile from "./Tile";
import './App.css';
import Strike from "./Strike";



function Board({Tiles, onTileClick, playerTurn, strikeClass }) 
{
    return(
        <div className="Board">
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(0)}  value={Tiles[0]} className ='right-border bottom-border'/>
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(1)} value={Tiles[1]} className=' right-border bottom-border'/>
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(2)}  value={Tiles[2]} className='bottom-border'/>
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(3)} value={Tiles[3]} className='right-border bottom-border'/>
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(4)}  value={Tiles[4]} className='right-border bottom-border'/>
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(5)}  value={Tiles[5]} className='bottom-border'/>
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(6)}  value={Tiles[6]} className='right-border'/>
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(7)}  value={Tiles[7]} className='right-border'/>
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(8)} value={Tiles[8]} />
           <Strike strikeClass={strikeClass}/>
         
        </div>

    )
}

export default Board;
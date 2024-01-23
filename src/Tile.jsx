import './App.css';
function Tile({className, value, onClick, playerTurn})
{  
    let hoverClass= null;
    if(value == null && playerTurn!= null)
    {
        hoverClass = `${playerTurn.toLowerCase()}-hover`
    }
    return (
    <div onClick ={onClick} className={`Tile ${className} ${hoverClass}`}> 
    {value === 'X' && <span className="X">{value}</span>}
      {value === 'O' && <span className="O">{value}</span>}
    </div>
    )

}

export default Tile
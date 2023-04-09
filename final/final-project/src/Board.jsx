import "./Board.css"
function Board({toggleTheme,theme}) {
    return(
    //   <Card header={"check"} content={"content"}/>
   <div className="board">
        <div className="board-title">
            Theme change:
        </div>
        <button className="board-button" onClick={toggleTheme}>
        {theme}
    </button>
   </div>
   
    );
}

export default Board;
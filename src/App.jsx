import { useState } from "react";
import Square from "./components/Square";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const nextsquare = squares.slice();
    nextsquare[i] = xIsNext ? "X" : "O";
    setSquares(nextsquare);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="board">
      <Square squareValue={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square squareValue={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square squareValue={squares[2]} onSquareClick={() => handleClick(2)} />
      <Square squareValue={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square squareValue={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square squareValue={squares[5]} onSquareClick={() => handleClick(5)} />
      <Square squareValue={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square squareValue={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square squareValue={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  );
};

export default App;

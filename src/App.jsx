import { useState } from "react";
import Square from "./components/Square";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleClick = (i) => {
    if (squares[i] || isGameOver) return;
    const nextSquare = squares.slice();
    nextSquare[i] = xIsNext ? "X" : "O";
    const winner = calculateWinner(nextSquare);
    if (winner) setIsGameOver(true);
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return false;
  };

  const winner = calculateWinner(squares);

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
      <h3 id="pemenang">
        Winner:
        {!winner && squares.filter((val) => val !== null).length == 9
          ? "Draw"
          : winner}{" "}
      </h3>
    </div>
  );
};

export default App;

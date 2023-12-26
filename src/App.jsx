import { useState } from "react";
import Square from "./components/Square";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  return (
    <div className="board">
      <Square squareValue={squares[0]} />
      <Square squareValue={squares[1]} />
      <Square squareValue={squares[2]} />
      <Square squareValue={squares[3]} />
      <Square squareValue={squares[4]} />
      <Square squareValue={squares[5]} />
      <Square squareValue={squares[6]} />
      <Square squareValue={squares[7]} />
      <Square squareValue={squares[8]} />
    </div>
  );
};

export default App;

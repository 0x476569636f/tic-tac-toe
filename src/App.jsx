import { useState } from "react";
import Square from "./components/Square";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className="board">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

export default App;

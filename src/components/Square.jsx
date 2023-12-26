const Square = ({ squareValue, onSquareClick }) => {
  return <button className="square" onClick={onSquareClick}>{squareValue}</button>;
};

export default Square;

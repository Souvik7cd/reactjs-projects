import PropTypes from "prop-types";
import Square from "./Square";
import "./Board.css";

const Board = ({ xIsNext, squares, onPlay }) => {
  let winningMove;

  const onSquareClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    onPlay(nextSquares);
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
        squares[b] === squares[c]
      ) {
        winningMove = i;
        return squares[a];
      }
    }

    return null;
  };

  const checkIfBoardFilled = (squares) => {
    for (let sqr of squares) {
      if (sqr === null) return false;
    }
    return true;
  };

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = `Winner ${winner}`
  } else {
    if(checkIfBoardFilled(squares)) {
      status = `It's a draw`;
    } else {
      status = `Next player ${xIsNext ? "X" : "O"}`
    }
  }

  return (
    <>
      <div>
        <p>{status}</p>
      </div>

      <div className="board">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => onSquareClick(index)}
          />
        ))}

        {winner && winningMove == 0 && <span className="win hor1"></span>}
        {winner && winningMove == 1 && <span className="win hor2"></span>}
        {winner && winningMove == 2 && <span className="win hor3"></span>}
        {winner && winningMove == 3 && <span className="win ver1"></span>}
        {winner && winningMove == 4 && <span className="win ver2"></span>}
        {winner && winningMove == 5 && <span className="win ver3"></span>}
        {winner && winningMove == 6 && <span className="win diag1"></span>}
        {winner && winningMove == 7 && <span className="win diag2"></span>}
      </div>
    </>
  );
};

Board.propTypes = {
  xIsNext: PropTypes.bool,
  squares: PropTypes.array,
  onPlay: PropTypes.func,
};

export default Board;

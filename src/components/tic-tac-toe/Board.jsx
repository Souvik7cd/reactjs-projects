import { useEffect, useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = () => {
  const [boardValues, setBoardValues] = useState([...Array(9).fill(null)]);
  const [currentTurn, setCurrentTurn] = useState("X");
  const [result, setResult] = useState();

  const winningMoves = [
    boardValues[0] !== null && boardValues[0] === boardValues[1] && boardValues[1] === boardValues[2],
    boardValues[3] !== null && boardValues[3] === boardValues[4] && boardValues[4] === boardValues[5],
    boardValues[6] !== null && boardValues[6] === boardValues[7] && boardValues[7] === boardValues[8],
    boardValues[0] !== null && boardValues[0] === boardValues[3] && boardValues[3] === boardValues[6],
    boardValues[1] !== null && boardValues[1] === boardValues[4] && boardValues[4] === boardValues[7],
    boardValues[2] !== null && boardValues[2] === boardValues[5] && boardValues[5] === boardValues[8],
    boardValues[0] !== null && boardValues[0] === boardValues[4] && boardValues[4] === boardValues[8],
    boardValues[2] !== null && boardValues[2] === boardValues[4] && boardValues[4] === boardValues[6],
  ];

  const toggleCurrentTurn = () => {
    currentTurn === "X" ? setCurrentTurn("O") : setCurrentTurn("X");
  };

  const handleSquareClick = (index) => {
    const updatedBoardValues = boardValues.slice();
    updatedBoardValues[index] = currentTurn;
    toggleCurrentTurn();
    setBoardValues([...updatedBoardValues]);
  };

  useEffect(() => {
    const checkIfBoardFilled = () => {
      for (let b of boardValues) {
        if (b === null) return false;
      }
      return true;
    };

    const detectWinner = () => {
      let winner;
      if (winningMoves[0]) winner = boardValues[0];
      else if (winningMoves[1]) winner = boardValues[3];
      else if (winningMoves[2]) winner = boardValues[6];
      else if (winningMoves[3]) winner = boardValues[0];
      else if (winningMoves[4]) winner = boardValues[1];
      else if (winningMoves[5]) winner = boardValues[2];
      else if (winningMoves[6]) winner = boardValues[0];
      else if (winningMoves[7]) winner = boardValues[2];

      if (winner === "X") setResult("X is the winner");
      else if (winner === "O") setResult("O is the winner");

      if (checkIfBoardFilled() && winner !== "X" && winner !== "O") {
        setResult("It's a draw");
      }
    };

    detectWinner();
  });

  const handleBoardReset = () => {
    setBoardValues([...Array(9).fill(null)]);
    setCurrentTurn("X");
    setResult();
  }

  return (
    <div className="game-container bg-tictactoe">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {boardValues.map((value, index) => (
          <Square
            key={index}
            value={value}
            result={result}
            handleSquareClick={() => handleSquareClick(index)}
          />
        ))}

        {result && winningMoves[0] && <span className="win hor1"></span>}
        {result && winningMoves[1] && <span className="win hor2"></span>}
        {result && winningMoves[2] && <span className="win hor3"></span>}
        {result && winningMoves[3] && <span className="win ver1"></span>}
        {result && winningMoves[4] && <span className="win ver2"></span>}
        {result && winningMoves[5] && <span className="win ver3"></span>}
        {result && winningMoves[6] && <span className="win diag1"></span>}
        {result && winningMoves[7] && <span className="win diag2"></span>}
      </div>
      {!result ? (
        <p>{currentTurn}&apos;s turn</p>
      ) : (
        <div>
          <p>{result}</p>
          <button onClick={handleBoardReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default Board;

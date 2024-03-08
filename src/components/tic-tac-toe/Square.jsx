import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./Board.css";

const Square = ({ value, handleSquareClick, result }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    !result && setIsDisabled(false);
  },[result, setIsDisabled])

  return (
    <button
      className={`square ${value === 'X' ? 'text-X' : 'text-O'}`}
      disabled={isDisabled || result}
      onClick={() => {
        setIsDisabled(true);
        handleSquareClick();
      }}
    >
      <span style={{height: "39px", width: "39px", display: "block"}}>
        {value === null ? <wbr/> : value}
      </span>
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  handleSquareClick: PropTypes.func,
  result: PropTypes.string
};

export default Square;

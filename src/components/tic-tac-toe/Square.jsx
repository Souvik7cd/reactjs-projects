import PropTypes from "prop-types";
import "./Board.css";

const Square = ({ value, onSquareClick }) => {

  return (
    <button
      className={`square ${value === "X" ? "text-X" : "text-O"}`}
      onClick={onSquareClick}
    >
      <span style={{ height: "39px", width: "39px", display: "block" }}>
        {value === null ? <wbr /> : value}
      </span>
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
};

export default Square;

import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";
import { useState } from "react";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStarClick = (currentIndex) => {
    setRating(currentIndex);
  };
  const handleStarOver = (currentIndex) => {
    setHover(currentIndex);
  };
  const handleStarLeave = () => {
    setHover(rating);
  };

  return (
    <div className="container">
      <h2>Star Rating</h2>
      <span>
        {[...Array(noOfStars)].map((_, index) => {
          index++;
          return (
            <FaStar
              key={index}
              className="star"
              onClick={() => handleStarClick(index)}
              onMouseOver={() => handleStarOver(index)}
              onMouseLeave={() => handleStarLeave()}
              style={{
                color: index <= (hover || rating) && "gold",
              }}
            />
          );
        })}
      </span>
    </div>
  );
};

StarRating.propTypes = {
  noOfStars: PropTypes.number,
};

export default StarRating;

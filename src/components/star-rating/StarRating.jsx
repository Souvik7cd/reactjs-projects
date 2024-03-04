import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";
import { useState } from "react";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(-1);
  const [hover, setHover] = useState(-1);

  const handleStarClick = (currentIndex) => {
    setRating(currentIndex);
    console.log("rating: "+ rating);
  }
  const handleStarOver = (currentIndex) => {
    setHover(currentIndex);
    console.log("rating: "+ rating);
    console.log("hover: "+ hover);
  }
  const handleStarLeave = () => {
    setHover(-1)
  }

  return (
    <div className="container">
      <h3>StarRating</h3>
      <span>
        {[...Array(noOfStars)].map((_, index) => (
          <FaStar 
            key={index} 
            className="star" 
            onClick={()=>handleStarClick(index)} 
            onMouseOver={()=>handleStarOver(index)} 
            onMouseLeave={()=>handleStarLeave()}
            style={{
              color: ((index <= hover) || (index <=rating)) && "gold"
            }}
          />
        ))}
      </span>
    </div>
  );
};

StarRating.propTypes = {
  noOfStars: PropTypes.number,
};

export default StarRating;

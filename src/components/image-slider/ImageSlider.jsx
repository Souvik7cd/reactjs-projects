import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";
import "./ImageSlider.css";

const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);

        const endpoint = `${url}?page=${page}&limit=${limit}`;
        const response = await fetch(endpoint);

        if (!response.ok)
          throw Error(
            `Network error: No images could be fetched from url: \n${endpoint}`
          );

        const jsonData = await response.json();
        if (jsonData) setImages(jsonData);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    if (url != "" && (page && limit) != null) fetchImages();
  }, [url, page, limit]);

  const handleLeftClick = () => {
    const noOfImages = images.length;
    currentSlide === 0
      ? setCurrentSlide(noOfImages - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  const handleRightClick = () => {
    const noOfImages = images.length;
    currentSlide === noOfImages - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const handleSlideIndicatorClick = (index) => {
    setCurrentSlide(index);
  }

  if (error) {
    return <div className="container error">{error.message}</div>;
  }

  if (isLoading) {
    return <div className="container">Loading images...</div>;
  }

  return (
    <div className="container">
      <div className="image-container position-relative">
        {images.map(({ id, download_url }, index) => {
          return (
            <img
              key={id}
              src={download_url}
              alt={download_url}
              className={(index !== currentSlide) ? "d-none" : undefined}
            />
          );
        })}
        <div className="slider-button-container">
          <button onClick={handleLeftClick}>
            <FaChevronLeft />
          </button>
          <button onClick={handleRightClick}>
            <FaChevronRight />
          </button>
        </div>
        <div className="slide-indicator-container">
          {images.map(({ id }, index) => (
            <FaCircle
              key={id}
              onClick={() => handleSlideIndicatorClick(index)}
              className={`slide-indicator ${
                index === currentSlide && "current-slide-indicator"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  url: PropTypes.string,
  page: PropTypes.number,
  limit: PropTypes.number,
};

export default ImageSlider;

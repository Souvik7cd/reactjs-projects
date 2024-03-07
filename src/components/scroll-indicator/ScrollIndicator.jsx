import { useEffect, useState } from "react";
import "./ScrollIndicator.css";
const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScrollPercentage = () => {
    const docElem = document.documentElement;
    const relativeHeight = docElem.scrollHeight - docElem.clientHeight;

    setScrollPercentage(100 * docElem.scrollTop / relativeHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="navbar">
      <h3>Custom Scroll Indicator</h3>
      <div className="scroll-indicator-container">
        <div
          className="scroll-indicator"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;

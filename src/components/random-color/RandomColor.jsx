import { useEffect, useState } from "react";
import "./RandomColor.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [textColour, setTextColor] = useState("white");

  const generateRandomColor = () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    detectTextColor(r, g, b);
    return [r, g, b];
  }

  const generateRandomRgbColor = () => {
    const [r, g, b] = generateRandomColor();
    const rgb = `rgb(${r}, ${g}, ${b})`;
    setColor(rgb);
  };

  const generateRandomHexColor = () => {
    const [r, g, b] = generateRandomColor();
    const hex = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    setColor(hex);
  };

  const detectTextColor = (r, g, b) => {
    const brightness = 
      Math.round((
        parseInt(r * 299) +
        parseInt(g * 587) +
        parseInt(b * 114)) / 1000
      );
    setTextColor((brightness > 125) ? 'black' : 'white');
  } 

  useEffect(()=> {
    if(typeOfColor === "rgb") generateRandomRgbColor();
    else if(typeOfColor === "hex") generateRandomHexColor();
  }, [typeOfColor]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="wrapper" style={{ backgroundColor: color }}>
      <div className="button-container">
        <button onClick={() => setTypeOfColor("rgb")}>RGB Color</button>
        <button onClick={() => setTypeOfColor("hex")}>HEX Color</button>
        <button
          onClick={() =>
            typeOfColor === "rgb"
              ? generateRandomRgbColor()
              : generateRandomHexColor()
          }
        >
          Generate Random Color
        </button>
      </div>
      <div style={{ fontSize: "3em", color: textColour, textAlign: "center", paddingTop: "3rem"}}>
        <div>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</div>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;

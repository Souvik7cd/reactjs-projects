import QRCode from "react-qr-code";
import "./QrCodeGenerator.css";
import { useState } from "react";

const QrCodeGenerator = () => {
  const [text, setText] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="wrapper bg-qrcode">
      <div className="qr-form">
        <h1 className="qr-heading">QR Code Generator</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setText(inputValue);
            setInputValue("");
          }}
          className="form-field-inline"
        >
          <input
            id="qr-text"
            name="qr-text"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message here..."
          />
          <button
            disabled={!(inputValue && inputValue.trim() !== "")}
            type="submit"
          >
            Generate
          </button>
        </form>
        <div className="qr-output">{text && <QRCode value={text} />}</div>
      </div>
    </div>
  );
};

export default QrCodeGenerator;

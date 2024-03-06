import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ header, body, footer, show = false }) => {
  return (
    <div
      className="modal-container"
      style={show ? { display: "block" } : { display: "none" }}
    >
      <div className="modal">
        <section className="modal-header">{header}</section>
        <section className="modal-body">{body}</section>
        <section className="modal-footer">{footer}</section>
      </div>
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.object | PropTypes.string,
  body: PropTypes.object | PropTypes.string,
  footer: PropTypes.object | PropTypes.string,
  show: PropTypes.bool,
};

export default Modal;

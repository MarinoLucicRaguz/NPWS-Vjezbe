import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

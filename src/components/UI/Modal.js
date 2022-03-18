import ReactDOM from "react-dom";
import RoundDiv from "./RoundDiv";

const Modal = (props) => {
  return ReactDOM.createPortal(
      <RoundDiv className="w-4/5 max-w-lg p-6 md:p-8 z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
        {props.children}
      </RoundDiv>,
    document.getElementById("modal-root")
  );
};

export default Modal;

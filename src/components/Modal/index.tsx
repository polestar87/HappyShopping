import "./style.scss";

import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

export type ModalInterfaceType = {
  showMessage: (message: string) => void;
};
const Modal = forwardRef<ModalInterfaceType>((props, ref) => {
  const [showModal, setModal] = useState(false);
  const [message, setMessage] = useState("");

  const divRef = useRef(document.createElement("div"));
  const divElement = divRef.current;
  useImperativeHandle(
    ref,
    () => {
      return {
        showMessage(message: string) {
          setMessage(message);
          setModal(true);
          setTimeout(() => {
            setModal(false);
          }, 1500);
        },
      };
    },
    []
  );

  useEffect(() => {
    if (showModal) {
      document.body.appendChild(divElement);
    } else {
      if (divElement.parentNode) {
        document.body.removeChild(divElement);
      }
    }

    return () => {
      if (divElement.parentNode) {
        document.body.removeChild(divElement);
      }
    };
  }, [showModal, divElement]);
  return createPortal(
    <div className="modal">
      <div className="modal-text">{message}</div>
    </div>,
    divElement
  );
  // return showModal ? (
  //   <div className="modal">
  //     <div className="modal-text">
  //       {message}
  //     </div>
  //   </div>
  // ) : null;
});

export default Modal;

import "./Modal.scss";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ children, clickFn }) => {
  return (
    <motion.div
      className="Modal"
      onClick={clickFn}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Modal;
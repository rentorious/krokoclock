import React from "react";
import { motion } from "framer-motion";
export default function Modal({ stopKroki, selectedImg, setSelectedImg }) {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      stopKroki();
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}

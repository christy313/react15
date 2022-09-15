import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const ButtonLeft = ({ index, setIndex }) => {
  return (
    <button className="prev" onClick={() => setIndex(index - 1)}>
      <FiChevronLeft />
    </button>
  );
};

export default ButtonLeft;

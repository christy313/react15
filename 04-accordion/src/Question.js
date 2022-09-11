import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <BiMinus size={20} /> : <BiPlus size={20} />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;

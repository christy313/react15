import React, { useState, useEffect } from "react";

const SingleColor = ({ weight, rgb, hexColor, index }) => {
  const [alert, setAlert] = useState(false);

  const hexValue = `#${hexColor}`;
  const backgroundColor = rgb.join(", ");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${backgroundColor})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

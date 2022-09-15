import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("#f15250");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>hi</h4>
      </section>
    </>
  );
};

export default App;

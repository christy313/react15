import React, { useState } from "react";
import Menu from "./Menu";
import items from "./data";

const App = () => {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Menu items={items} />
    </main>
  );
};

export default App;

import React from "react";

const Menu = () => {
  return (
    <div className="section-center">
      <article className="menu-item">
        <img className="photo" />
        <div className="item-info">
          <header>
            <h4></h4>
            <h4 className="price"></h4>
          </header>
          <p className="item-text"></p>
        </div>
      </article>
    </div>
  );
};

export default Menu;

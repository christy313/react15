import React, { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

import Title from "./components/Title";
import ButtonLeft from "./components/ButtonLeft";
import ButtonRight from "./components/ButtonRight";

const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <Title />
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, name, image, title, quote } = person;
          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <ButtonLeft setIndex={setIndex} index={index} />
        <ButtonRight setIndex={setIndex} index={index} />
      </div>
    </section>
  );
};

export default App;

import React from "react";
import { FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useFetch } from "./useFetch";

const url = "https://randomuser.me/api";

const RandomPerson = ({ handleRandom }) => {
  const { person, getPerson } = useFetch(url);

  return (
    <>
      {person.map((item) => {
        const {
          name: { first },
          picture: { large },
          login: { uuid },
        } = item;
        return (
          <article className="review" key={uuid}>
            <div className="img-container">
              <img src={large} className="person-img" alt={first} />
              <span className="quote-icon">
                <FaQuoteRight />
              </span>
            </div>
            <h4 className="author">{first}</h4>
            <p className="job">Developer</p>
            <p className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              eius expedita, at obcaecati deleniti adipisci.
            </p>
            <div className="button-container">
              <button className="next-btn" onClick={() => getPerson()}>
                <FaChevronRight />
              </button>
            </div>
            <button className="random-btn" onClick={() => handleRandom()}>
              back list users
            </button>
          </article>
        );
      })}
    </>
  );
};

export default RandomPerson;

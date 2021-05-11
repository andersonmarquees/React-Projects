import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import RandomPerson from "./RandomPerson";

const Review = () => {
  const [isRandom, setIsRandom] = useState(false);
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const handlePrev = () => {
    setIndex((prevValue) => {
      if (prevValue === 0) {
        setIndex((prevValue = people.length - 1));
      }
      return prevValue - 1;
    });
  };

  const handleNext = () => {
    setIndex((prevValue) => {
      if (prevValue === people.length - 1) {
        setIndex((prevValue = 0));
      }
      return prevValue + 1;
    });
  };
  const handleRandom = () => {
    setIsRandom((prevRandom) => {
      return !prevRandom;
    });
  };

  if (isRandom) {
    return <RandomPerson handleRandom={handleRandom} />;
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} className="person-img" alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        random user
      </button>
    </article>
  );
};

export default Review;

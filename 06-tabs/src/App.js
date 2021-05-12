import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useFetch } from "./useFetch";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const { people, isLoading } = useFetch(url);
  const [value, setValue] = useState(0);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = people[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {people.map((item, index) => {
            const { company } = item;
            return (
              <button
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
                key={item.id}
              >
                {company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button className="btn" type="button">
        more info
      </button>
    </section>
  );
}

export default App;

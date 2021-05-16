import React, { useState } from "react";
import { useFetch } from "./useFetch";

function App() {
  const [count, setCount] = useState(0);

  const url = `https://baconipsum.com/api/?type=meat-and-filler&paras=${count}`;
  const { loremIpsum, isLoading } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 30) {
      amount = 30;
    }
    setCount(amount);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>

      <article className="lorem-text">
        {loremIpsum.map((paragraphs, index) => {
          return <p key={index}>{paragraphs}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

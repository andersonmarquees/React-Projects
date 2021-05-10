import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, handleDelete, getTours }) => {
  return (
    <section>
      <div className="title">
        {(tours.length === 0 && <h2>not tours left</h2>) || <h2>ours tours</h2>}
        {tours.length === 0 && (
          <button className="btn" onClick={() => getTours()}>
            refresh
          </button>
        )}
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          const { id } = tour;
          return <Tour {...tour} key={id} handleDelete={handleDelete} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

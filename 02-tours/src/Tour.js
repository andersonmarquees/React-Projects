import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, handleDelete }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {moreInfo ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setMoreInfo(!moreInfo)}>
            {moreInfo ? "show more" : "show less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          not interest
        </button>
      </footer>
    </article>
  );
};

export default Tour;

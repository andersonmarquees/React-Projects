import React from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
import { useGlobalContext } from "./context";

function App() {
  const { loading, handleSubmit, photos, query, handleInputChange } =
    useGlobalContext();

  return (
    <main>
      <section className="search">
        <form
          className="search-form"
          value={query}
          onChange={handleInputChange}
        >
          <input type="text" placeholder="search" className="form-input" />
          <button className="submit-btn" type="submit" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image) => {
            return <Photo key={image.id} {...image} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;

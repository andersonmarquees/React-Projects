import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const handleClear = () => {
    setPeople([]);
  };

  const handleRefresh = () => {
    setPeople(data);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          const { id } = person;
          return <List {...person} key={id} />;
        })}
        {people.length === 0 && (
          <button onClick={handleRefresh}>Refresh</button>
        )}
        {people.length !== 0 && (
          <button onClick={handleClear}>clear all</button>
        )}
      </section>
    </main>
  );
}

export default App;

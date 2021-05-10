import React from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { useFetch } from "./useFetch";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const { tours, loading, setTours, getTours } = useFetch(url);

  const handleDelete = (id) => {
    setTours((prevTours) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      return newTours;
    });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Tours tours={tours} handleDelete={handleDelete} getTours={getTours} />
    </main>
  );
}

export default App;

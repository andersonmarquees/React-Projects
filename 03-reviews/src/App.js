import React from "react";
import Review from "./Review";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";
import { useFetch } from "./useFetch";

function App() {
  const { isLoading, isError } = useFetch();

  if (isLoading) {
    return <Loading />;
  }
  if (!isError) {
    return <ErrorPage />;
  }
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>ours reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;

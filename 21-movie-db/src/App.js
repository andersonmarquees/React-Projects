import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/movie/:id">
        <Movie props={"single movie"} />
      </Route> */}
      <Route path="/movie/:id" children={<Movie />} />
    </Switch>
  );
}

export default App;

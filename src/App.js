import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details.js";
import ThemeContext from "./ThemeContext";
import { Router, Link } from "@reach/router";

const App = () => {
  const theme = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt Me!!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));

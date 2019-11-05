import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!!"),
  //   React.createElement(Pet, {
  //     name: "Duffy",
  //     animal: "Dog",
  //     breed: "Labrador"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Heera",
  //     animal: "Cat",
  //     breed: "Desi"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Bubli",
  //     animal: "Cow",
  //     breed: "BJP"
  //   })
  // ]);
  return (
    <div>
      <h1>"Adopt Me!!"</h1>
      <Pet name="Duffy" animal="Dog" breed="Labrador" />
      <Pet name="Meo" animal="Cat" breed="Hawanese" />
      <Pet name="Sitara" animal="Bird" breed="Mohogini" />
    </div>
  );
};
render(<App />, document.getElementById("root"));

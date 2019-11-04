import Pet from "./Pet.js";
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!!"),
    React.createElement(Pet, {
      name: "Duffy",
      animal: "Dog",
      breed: "Labrador"
    }),
    React.createElement(Pet, {
      name: "Heera",
      animal: "Cat",
      breed: "Desi"
    }),
    React.createElement(Pet, {
      name: "Bubli",
      animal: "Cow",
      breed: "BJP"
    })
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

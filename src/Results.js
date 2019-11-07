import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  if (!pets.length) return <h1>No pets available</h1>;
  //console.log(pets);
  return pets.map(pet => (
    <Pet
      key={pet.id}
      id={pet.id}
      name={pet.name}
      animal={pet.type}
      breed={pet.breeds.primary}
      location={pet.contact.address.city}
      photos={pet.photos}
    />
  ));
};
export default Results;

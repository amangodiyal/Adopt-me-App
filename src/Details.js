import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel.js";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    // throw Error("new error");
    pet
      .animal(+this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          type: animal.type,
          location: `${animal.contact.address.city},${animal.contact.address.state}`,
          description: animal.description,
          photos: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    const {
      animal,
      name,
      type,
      location,
      description,
      photos,
      breed
    } = this.state;
    return (
      <div className="details">
        <div>
          <Carousel photos={photos} />
          <h1>{name}</h1>
          <h2>{`${type}-${breed}-${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// export default Details;
export default function DetailsErrorBoundary(props) {
  console.log(props);
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

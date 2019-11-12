import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel.js";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import { navigate } from "@reach/router";
import Modal from "./Modal";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.adopt = this.adopt.bind(this);
  }
  componentDidMount() {
    // throw Error("new error");
    pet
      .animal(+this.props.id)
      .then(({ animal }) => {
        // console.log(animal);
        this.setState({
          name: animal.name,
          type: animal.type,
          location: `${animal.contact.address.city},${animal.contact.address.state}`,
          description: animal.description,
          photos: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
          url: animal.url
        });
      })
      .catch(err => this.setState({ error: err }));
  }
  toggleModal() {
    // console.log("togglemodal called");
    this.setState({ showModal: !this.state.showModal });
  }
  adopt() {
    navigate(this.state.url);
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    //this.toggleModal();
    const {
      animal,
      name,
      type,
      location,
      description,
      photos,
      breed,
      url,
      showModal
    } = this.state;
    return (
      <div className="details">
        <div>
          <Carousel photos={photos} />
          <h1>{name}</h1>
          <h2>{`${type}-${breed}-${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No not now</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// export default Details;
export default function DetailsErrorBoundary(props) {
  //console.log(props);
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

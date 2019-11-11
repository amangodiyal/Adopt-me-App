import React, { Component } from "react";
class Carousel extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      photos: [],
      active: 0
    };
    // this.handleIndexClick = this.handleIndexClick.bind(this);
  }
  static getDerivedStateFromProps({ photos }) {
    let x = ["http://placecorgi.com/600/600"];
    if (photos.length) {
      //console.log(photos);
      x = photos.map(({ large }) => large);
      //   console.log(x);
    }
    return { photos: x };
  }
  handleIndexClick(e) {
    //console.log(e.target);
    this.setState({ active: +e.target.dataset.index });
  }

  render() {
    // throw new Error("aman has an error for you");

    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              onClick={e => {
                this.handleIndexClick(e);
              }}
              data-index={index}
              alt="animal-thumbnail"
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

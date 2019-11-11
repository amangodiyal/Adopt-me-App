import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(e) {
    console.log(e);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error <Link to="/">Click Here</Link> to go to Homepage or
          wait for 5 seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

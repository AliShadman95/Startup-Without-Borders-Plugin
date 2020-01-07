import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";

export default class Shortcode extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: "" };
  }

  onInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1>TEST SHORTCODE</h1>
      </div>
    );
  }
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
};

/* import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Shortcode extends Component {
  render() {
    return (
      <div>
        <h1>WP Reactivate Frontend</h1>
        <p>Title: {this.props.wpObject.title}</p>
      </div>
    );
  }
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
}; */

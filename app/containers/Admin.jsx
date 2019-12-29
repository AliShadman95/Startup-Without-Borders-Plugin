import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import LoggedIn from "./components/LoggedIn";
var WPAPI = require("wpapi");
import { registerRoutes } from "./helpers/Crud";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    registerRoutes();
  }

  render() {
    wp = new WPAPI({
      endpoint: window.wpr_object.api_url,
      nonce: window.wpr_object.api_nonce
    });
    return (
      <React.Fragment>
        <LoggedIn
          nonce={this.props.wpObject.api_nonce}
          url={this.props.wpObject.api_url}
          wpapi={wp}
        />
      </React.Fragment>
    );
  }
}

Admin.propTypes = {
  wpObject: PropTypes.object
};

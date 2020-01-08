import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import LoggedIn from "./components/LoggedIn";
import VerticalTab from "./components/Backend/VerticalTab";
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
    console.log(this.props.wpObject);
    
    return (
      <React.Fragment>
        {/*  <LoggedIn
          nonce={this.props.wpObject.api_nonce}
          url={this.props.wpObject.api_url}
          wp={wp}
        /> */}
        <VerticalTab wp={wp} src={this.props.wpObject} />
      </React.Fragment>
    );
  }
}

Admin.propTypes = {
  wpObject: PropTypes.object
};

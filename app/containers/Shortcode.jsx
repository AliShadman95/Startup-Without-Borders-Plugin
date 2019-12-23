import React, { Component } from "react";
import PropTypes from "prop-types";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
var WPAPI = require("wpapi");
let wp = new WPAPI({
  endpoint: window.wpr_object.api_url,

  nonce: window.wpr_object.api_nonce
});
export default class Shortcode extends Component {
  componentDidMount() {
    wp.posts().get(function(err, data) {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });

    // Promises
    wp.posts()
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    console.log(endpoint);

    return (
      <div className="container">
        <Navbar />
        <h1 className="text-center">Chapters</h1>
        <hr />

        <div className="row">
          <div className="col-10 events">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="input-group mb-2 ">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text btn-outline-light"
                        id="basic-addon1"
                      >
                        City
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write city name"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-3 text-right offset-5">
                  <span className="btn btn-outline-light">Open A Chapters</span>
                </div>
              </div>
              <hr />
              <div className="row">
                <Events />
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="col-8 offset-2">
              <button className="btn btn-outline-light btn-block mb-3">
                Login
              </button>
              <button className="btn btn-outline-light btn-block  mb-3">
                SignUp
              </button>
            </div>
            <hr />
            <div className="col-8 offset-2">
              <button className="btn btn-outline-light btn-block mb-4">
                Roma
              </button>
              <button className="btn btn-outline-light btn-block  mb-4">
                Canada
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
};

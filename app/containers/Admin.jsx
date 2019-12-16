import React, { Component } from "react";
import PropTypes from "prop-types";

import Navbar from "../containers/Navbar";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Navbar fetchWP={this.fetchWP} />

        <h4>test</h4>

        <div className="wrap">
          <form>
            <h1>WP Reactivate Settings</h1>
            <h2>This is a h2 test</h2>
            <label>
              Example Setting:
              <input
                type="text"
                value={this.state.exampleSetting}
                onChange={this.updateInput}
              />
            </label>

            <button
              id="save"
              className="button button-primary"
              onClick={this.handleSave}
            >
              Save
            </button>

            <button
              id="delete"
              className="button button-primary"
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

Admin.propTypes = {
  wpObject: PropTypes.object
};

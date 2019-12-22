import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import LoggedIn from "./components/LoggedIn";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: "" };
  }

  onInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar fetchWP={this.fetchWP} />
        <LoggedIn
          nonce={this.props.wpObject.api_nonce}
          url={this.props.wpObject.api_url}
        />
        <h4>test</h4>
        <h2>hehfeihfewfui</h2>

        <div className="wrap">
          <form>
            <h1>WP Reactivate Settings</h1>
            <h2>This is a h2 test</h2>
            <label>
              Example Setting:
              <input
                type="text"
                value={this.state.inputValue}
                onChange={this.onInputChange}
              />
            </label>

            <button id="save" className="button button-primary">
              Save
            </button>

            <button id="delete" className="button button-primary">
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

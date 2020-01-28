import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./components/Backend/Redux/Reducers";
import VerticalTab from "./components/Backend/VerticalTab";
var WPAPI = require("wpapi");
import { registerRoutes } from "./helpers/Crud";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

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
      <Provider store={store}>
        {/*  <LoggedIn
          nonce={this.props.wpObject.api_nonce}
          url={this.props.wpObject.api_url}
          wp={wp}
        /> */}
        <VerticalTab wp={wp} />
      </Provider>
    );
  }
}

Admin.propTypes = {
  wpObject: PropTypes.object
};

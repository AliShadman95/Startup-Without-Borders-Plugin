import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Events from "./Events";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
var WPAPI = require("wpapi");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#343a40"
    }
  }
});
export default class ChaptersPage extends Component {
  state = {
    search: ""
  };
  componentDidMount() {
    const { wpUrl } = this.props;
    wp = new WPAPI({
      endpoint: wpUrl.api_url,
      nonce: wpUrl.api_nonce
    });
    var namespace = "wp/v2"; // use the WP API namespace
    var route = "/chapter/(?P<id>)"; // route string - allows optional ID parameter
    wp.chapter = wp.registerRoute(namespace, route);

    wp.chapter().get(function(err, data) {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });

    // Promises
    wp.chapter()
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.error(err);
      });

    console.log(wpUrl.api_url);

    console.log(wp);

    wp.users().get((err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  }

  handleChangeSearch = e => {
    let value = e.target.value;
    this.setState({
      search: value
    });
  };
  render() {
    const { url, href } = this.props;

    return (
      <React.Fragment>
        <div className="bac-img">
          <img
            src={url + "images/background_chapters.jpg"}
            alt="background_chapters"
          />
        </div>
        <div className="container-fluid">
          <div className="p-10 d-flex align-items-center justify-content-center image-map">
            <img src={url + "images/chapters_dark.svg"} alt="chapters" />
            {/* <h1 className="text-center">Chapters</h1> */}
          </div>
          <hr />
          <div className="row">
            <div className="col-md-10 col-s-9 events">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <div className="input-group mb-2 ">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text bg-dark text-light"
                          id="basic-addon1"
                        >
                          <SearchIcon />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={"Write city name"}
                        aria-describedby="basic-addon1"
                        onChange={this.handleChangeSearch}
                      />
                    </div>
                  </div>
                  <div className="col-3 text-right offset-5">
                    <MuiThemeProvider theme={theme}>
                      <Button variant="contained" color="primary">
                        Open A Chapter
                      </Button>
                    </MuiThemeProvider>
                  </div>
                </div>
                <hr />

                <Events href={href} />
              </div>
            </div>
            <div className="col-md-2 col-s-3">
              <span className="list-group-item list-group-item-action active">
                Chapters
              </span>
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                  Rome
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Cairo
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Canada
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Aleppo
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Los Angelos
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ChaptersPage.propTypes = {
  wpObject: PropTypes.object
};

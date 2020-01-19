import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Events from "./Events";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Chapters from "./Chapters";
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
    search: "",
    type: "",
    chapters: [],
    idChapters: 0,
    events: []
  };
  componentDidMount() {
    const { wpUrl } = this.props;
    wp = new WPAPI({
      endpoint: wpUrl.api_url,
      nonce: wpUrl.api_nonce
    });
    // chapters api
    var namespace = "wp/v2";
    var route = "/chapter/(?P<id>)";
    wp.chapter = wp.registerRoute(namespace, route);

    wp.chapter()
      .get(function(err, data) {
        if (err) {
          console.error(err);
        }
        console.log(data);
      })
      .then(res => {
        this.setState({
          chapters: res
        });
      });

    // usres api
    wp.users().get((err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });

    var namespace = "wp/v2";
    //Event
    var route = "/event/(?P<id>)";
    wp.event = wp.registerRoute(namespace, route, {
      params: ["author"]
    });

    wp.event()
      .get(function(err, data) {
        if (err) {
          console.error(err);
        }
      })
      .then(res => {
        this.setState({
          events: res
        });
      });
  }

  handleChangeSearch = e => {
    let value = e.target.value;
    this.setState({
      type: value
    });
  };
  handleClickChapters = e => {
    console.log(e.target.textContent);
    this.setState({
      search: e.target.textContent
    });
  };

  handleChapters = e => {
    console.log(e.target.value);
    this.setState({
      idChapters: e.target.value
    });
  };
  sendSearch = () => {
    this.setState({
      search: this.state.type
    });
  };
  render() {
    const { wpUrl, handleOpenChapter } = this.props;

    return (
      <div className="row">
        <div className="col-lg-4">
          {/* start search input */}
          <div className="input-group mb-2 ">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-dark text-light"
                id="basic-addon1"
                onClick={() => this.sendSearch()}
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
          {/* end search input */}
        </div>
        <div className="col-lg-4">
          {/* start select chapters */}
          <Chapters
            chapters={this.state.chapters}
            handleChapters={this.handleChapters}
            value={this.state.idChapters}
          />

          {/* end select chapters */}
        </div>
        <div className="col-lg-4">
          {/* start open chapters */}

          <MuiThemeProvider theme={theme}>
            <Button
              className="ml-2"
              style={{ width: "90%" }}
              variant="contained"
              color="primary"
              onClick={() => handleOpenChapter()}
            >
              Open A Chapter
            </Button>
          </MuiThemeProvider>

          {/* end open chapters */}
        </div>
        <div className="col-12">
          <Events
            wpUrl={wpUrl}
            idChapters={this.state.idChapters}
            events={this.state.events}
            chapters={this.state.chapters}
            search={this.state.search}
          />
        </div>
      </div>
    );
  }
}

ChaptersPage.propTypes = {
  wpObject: PropTypes.object
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Events from "./Events";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Chapters from "./Chapters";

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
    const { url, events, media, chapters } = this.props;

    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
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
            <div className="col-lg-4 offset-lg-4 pr-3 col-md-6 col-xs-12">
              <Chapters
                chapters={chapters}
                handleChapters={this.handleChapters}
                value={this.state.idChapters}
              />
            </div>
            <div className="col-12">
              <Events
                idChapters={this.state.idChapters}
                events={events}
                chapters={chapters}
                search={this.state.search}
                media={media}
              />
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

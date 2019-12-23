import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
var WPAPI = require("wpapi");
let site = new WPAPI({
  endpoint: window.wpr_object.api_url,

  nonce: window.wpr_object.api_nonce
});
export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      place: "",

      content: ""
    };
  }
  componentDidMount() {
    site.posts().get(function(err, data) {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });

    // Promises
    site
      .posts()
      .then(function(data) {
        console.log(data[0].acf.place);
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  createPost = () => {
    console.log("click");

    site
      .posts()
      .create({
        title: this.state.title,
        content: this.state.content,

        place: "Aleppo",

        status: "publish"
      })
      .then(function(post) {
        return site
          .media()
          .file(document.getElementById("file-input").files[0])
          .create({
            title: "Amazing featured image",
            post: post.id
          })
          .then(function(media) {
            // Set the new media record as the post's featured media
            return site
              .posts()
              .id(post.id)
              .update({
                featured_media: media.id
              });
          });
      });
  };

  onInputChange = event => {
    const name = event.target.name;
    console.log(name);
    this.setState({
      [name]: event.target.value
    });
  };
  onChangeCategory = e => {
    let categories = this.state.categories;
    categories.push(e.target.value);
    this.setState({
      categories
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar fetchWP={this.fetchWP} />
        <h2>Event Form</h2>
        <label htmlFor="">
          Event Title:{" "}
          <input
            className="form-control"
            type="text"
            onChange={this.onInputChange}
            name="title"
            placeholder="Write the title "
          />
        </label>
        <label htmlFor="">
          Event Place:{" "}
          <input
            type="place"
            className="form-control"
            onChange={this.onInputChange}
            name="place"
            placeholder="Write the place "
          />
        </label>

        <label htmlFor="">
          Event content:{" "}
          <textarea
            type="text"
            name="content"
            className="form-control"
            onChange={this.onInputChange}
            placeholder="Write the content "
          />
        </label>
        <input type="file" name="image" id="file-input" />
        <button onClick={() => this.createPost()}>Create Event</button>
      </React.Fragment>
    );
  }
}

Admin.propTypes = {
  wpObject: PropTypes.object
};

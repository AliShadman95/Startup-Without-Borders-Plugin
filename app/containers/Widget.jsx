import React, { Component } from "react";
import PropTypes from "prop-types";
import FormCreateChapter from "./components/Frontend/FormCreateChapter";

export default class Widget extends Component {
  state = {
    count: 0,
    isRight: false
  };
  handleIncreaseCount = n => {
    console.log(n);

    if (n === this.state.count) {
      this.setState({ count: this.state.count + 1 });
    }
  };
  handleDecreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleShow = () => {
    this.setState({
      isRight: true
    });
  };
  handleHide = () => {
    this.setState({
      isRight: false
    });
  };

  render() {
    return (
      <div>
        {this.state.isRight ? (
          <React.Fragment>
            <h2 className="text-center">Request Form</h2>
            <FormCreateChapter
              count={this.state.count}
              handleDecreaseCount={this.handleDecreaseCount}
              handleIncreaseCount={this.handleIncreaseCount}
              handleHide={this.handleHide}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button onClick={() => this.handleShow()}>
              <img
                src="https://startupswb.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-12-at-09.01.40-300x167.png"
                alt="create a chapter"
              />
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

Widget.propTypes = {
  wpObject: PropTypes.object
};

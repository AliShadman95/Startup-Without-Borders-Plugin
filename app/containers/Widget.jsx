import React, { Component } from "react";
import PropTypes from "prop-types";
import FormCreateChapter from "./components/Frontend/FormCreateChapter";

export default class Widget extends Component {
  state = {
    count: 0,
    isRight: false,
    value: {
      name: "",
      surname: "",
      email: "",
      yourself: "",
      why: "",
      city: "",
      country: ""
    },
    sociale: {
      Facebook: false,
      LinkedIn: false,
      Instagram: false,
      Twitter: false
    },
    regions: "",
    radio: "yes"
  };
  handleIncreaseCount = () => {
    let count = this.state.count;
    let value = { ...this.state.value };
    console.log(value);
    let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      value.email
    );
    if (
      count === 0 &&
      value.name !== "" &&
      value.surname !== "" &&
      value.email !== "" &&
      checkEmail
    ) {
      this.setState({ count: this.state.count + 1 });
    } else if (count === 1 && value.yourself !== "" && value.why !== "") {
      this.setState({ count: this.state.count + 1 });
    } else if (
      count === 2 &&
      value.city !== "" &&
      value.country !== "" &&
      this.state.regions !== ""
    ) {
      this.setState({ count: this.state.count + 1 });
    } else {
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

  handleType = (name, e) => {
    let value = { ...this.state.value };
    value[name] = e.target.value;
    this.setState({
      value
    });
  };
  handleChangeSocial = (name, e) => {
    let sociale = { ...this.state.sociale };
    sociale[name] = e.target.value;
    this.setState({
      sociale
    });
  };

  handleChange = e => {
    this.setState({
      regions: e.target.value
    });
  };

  handleChangeRadio = e => {
    this.setState({
      radio: e.target.value
    });
  };
  render() {
    const { value, sociale, radio, regions } = this.state;
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
              handleType={this.handleType}
              handleChange={this.handleChange}
              radio={radio}
              sociale={sociale}
              handleChangeSocial={this.handleChangeSocial}
              handleChangeRadio={this.handleChangeRadio}
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

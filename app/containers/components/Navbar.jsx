import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  styleBtn: {
    width: "48%",
    background: "#626365",
    color: "#f3f3f3",
    marginRight: "1%"
  }
}));
const Navbar = props => {
  const classes = useStyles();
  const { url, handleSignUp } = props;
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      id="navbar-chapters"
    >
      <a className="navbar-brand" style={{ width: "10%" }} href="#">
        <img
          src={url + "images/logo_white.png"}
          alt="logo"
          style={{ width: "100%" }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div
              className="dropdown-menu bg-dark"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item text-light" href="#">
                Action
              </a>
              <a className="dropdown-item text-light" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item text-light" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline col-md-3 my-2 my-lg-0">
          <Button variant="contained" className={classes.styleBtn}>
            Log In
          </Button>

          <Button
            className={classes.styleBtn}
            variant="contained"
            onClick={() => handleSignUp()}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

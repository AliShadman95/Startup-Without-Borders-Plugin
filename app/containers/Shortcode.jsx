import React, { useState } from "react";
import PropTypes from "prop-types";
import ChaptersPage from "./components/ChaptersPage";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";

export default function Shortcode(props) {
  const { wpObject } = props;
  console.log(wpObject);
  const [signup, setSignup] = useState(false);

  const handleSignUp = () => {
    setSignup(true);
  };
  const handleChangeCheck = () => {
    setSignup(false);
  };
  return (
    <div className="container-fluid position-relative container-shortcode">
      <Navbar url={wpObject.plugin_url} handleSignUp={handleSignUp} />

      {signup ? (
        <SignUp wpUrl={wpObject} handleChangeCheck={handleChangeCheck} />
      ) : null}
      <ChaptersPage url={wpObject.plugin_url} wpUrl={wpObject} />
    </div>
  );
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
};

import React, { useState } from "react";
import PropTypes from "prop-types";
import ChaptersPage from "./components/ChaptersPage";
import SignUp from "./components/SignUp";
import OpenChapter from "./components/OpenChapter";
import Navbar from "./components/Navbar";

export default function Shortcode(props) {
  const { wpObject } = props;
  console.log(wpObject);
  const [signup, setSignup] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSignUp = () => {
    setSignup(true);
  };
  const handleChangeCheck = () => {
    setSignup(false);
  };

  const handleOpenChapter = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="container-fluid position-relative container-shortcode">
      <Navbar url={wpObject.plugin_url} handleSignUp={handleSignUp} />

      {signup ? (
        <SignUp wpUrl={wpObject} handleChangeCheck={handleChangeCheck} />
      ) : null}
      {open ? (
        <OpenChapter wpUrl={wpObject} handleCancel={handleCancel} />
      ) : null}
      <ChaptersPage
        url={wpObject.plugin_url}
        wpUrl={wpObject}
        handleOpenChapter={handleOpenChapter}
      />
    </div>
  );
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
};

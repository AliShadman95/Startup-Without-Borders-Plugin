import React, { useEffect } from "react";
var WPAPI = require("wpapi");

const LoggedIn = () => {
  useEffect(() => {
    wp = new WPAPI({
      endpoint: window.wpr_object.api_url,
      nonce: window.wpr_object.api_nonce
    });

    // Questo fa il fetch di tutti i post su wordpress
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const data = await wp.posts().get();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <div></div>;
};

export default LoggedIn;

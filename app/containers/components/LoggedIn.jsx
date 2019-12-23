import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const LoggedIn = ({ nonce, url, wpapi }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      var namespace = "wp/v2"; // use the WP API namespace
      var route = "/event/(?P<id>)"; // route string - allows optional ID parameter
      wpapi.event = wpapi.registerRoute(namespace, route);
      const data = await wp.event().get();
      console.log(data);
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <div></div>;
};

export default LoggedIn;

import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const LoggedIn = ({ nonce, url, wpapi }) => {
  const [events, setEvents] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    registerRoutes();
    getEvents();
    getSpeakers();
    /* createEvent(); */
  }, []);

  //This register all the routes for the CUSTOM POST TYPES
  const registerRoutes = () => {
    //Event
    var namespace = "wp/v2";
    var route = "/event/(?P<id>)";
    wpapi.event = wpapi.registerRoute(namespace, route);
    //Sponsor
    var namespace = "wp/v2"; // use the WP API namespace
    var route = "/sponsor/(?P<id>)"; // route string - allows optional ID parameter
    wpapi.sponsor = wpapi.registerRoute(namespace, route);
    //Partner
    var namespace = "wp/v2"; // use the WP API namespace
    var route = "/partner/(?P<id>)"; // route string - allows optional ID parameter
    wpapi.partner = wpapi.registerRoute(namespace, route);
    //Speaker
    var namespace = "wp/v2"; // use the WP API namespace
    var route = "/speaker/(?P<id>)"; // route string - allows optional ID parameter
    wpapi.speaker = wpapi.registerRoute(namespace, route);
  };

  // Getting Events CUSTOM POST TYPE
  const getEvents = async () => {
    try {
      const data = await wp.event().get();

      console.log(data);
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Create an event
  const createEvent = async () => {
    const data = await wp.event().create({
      title: "testigg",
      content: "Your post content",
      meta: { Speakers: 3, Sponsors: "2,4,6", Partners: 4 },
      status: "publish"
    });
  };

  // Getting Speakers CUSTOM POST TYPE
  const getSpeakers = async () => {
    try {
      const data = await wp.speaker().create();

      console.log(data);
      setSpeakers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Getting Partners CUSTOM POST TYPE
  const getPartners = async () => {
    try {
      const data = await wp.partner().get();

      console.log(data);
      setPartners(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Getting Sponsors CUSTOM POST TYPE
  const getSponsors = async () => {
    try {
      const data = await wp.sponsor().get();

      console.log(data);
      setSponsors(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <div></div>;
};

export default LoggedIn;

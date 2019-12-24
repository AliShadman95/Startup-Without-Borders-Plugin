import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const LoggedIn = ({ nonce, url, wpapi }) => {
  const [events, setEvents] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    registerRoutes();
    getPostType("Event");
    getPostType("Sponsor");
    /* deletePostType("Event", 85); */
    updatePostType(
      "Event",
      76,
      "Partyy 3",
      { Partners: 7, Sponsors: 1, Speakers: 4 },
      "publish"
    );
    /*  createPostType("Sponsor", "ttesa", {}, "publish"); */
  }, []);

  //This register all the routes for the CUSTOM POST TYPES
  const registerRoutes = () => {
    var namespace = "wp/v2";
    //Event
    var route = "/event/(?P<id>)";
    wpapi.event = wpapi.registerRoute(namespace, route);
    //Sponsor
    var route = "/sponsor/(?P<id>)";
    wpapi.sponsor = wpapi.registerRoute(namespace, route);
    //Partner
    var route = "/partner/(?P<id>)";
    wpapi.partner = wpapi.registerRoute(namespace, route);
    //Speaker
    var route = "/speaker/(?P<id>)";
    wpapi.speaker = wpapi.registerRoute(namespace, route);
  };

  // Create Chapter
  const createChapter = () => {};

  //Create a post type based on the "type" param
  const createPostType = async (type, title, meta, status) => {
    switch (type) {
      case "Event":
        await wp.event().create({
          title,
          meta,
          status
        });
        break;
      case "Speaker":
        await wp.speaker().create({
          title,
          status
        });
        break;
      case "Sponsor":
        await wp.sponsor().create({
          title,
          status
        });
        break;
      case "Partner":
        await wp.partner().create({
          title,
          status
        });
        break;
    }
  };

  //Get a post type based on the "type" param
  const getPostType = async type => {
    switch (type) {
      case "Event":
        try {
          const data = await wp.event().get();
          console.log(data);
          setEvents(data);
        } catch (error) {
          console.log(error);
        }
        break;
      case "Speaker":
        try {
          const data = await wp.speaker().create();
          console.log(data);
          setSpeakers(data);
        } catch (error) {
          console.log(error);
        }
        break;
      case "Sponsor":
        try {
          const data = await wp.sponsor().get();
          console.log(data);
          setSponsors(data);
        } catch (error) {
          console.log(error);
        }
        break;
      case "Partner":
        try {
          const data = await wp.partner().get();
          console.log(data);
          setPartners(data);
        } catch (error) {
          console.log(error);
        }
        break;
    }
  };

  //Update a post type based on the "type" param
  const updatePostType = async (type, id, title, meta, status) => {
    switch (type) {
      case "Event":
        try {
          await wp
            .event()
            .id(id)
            .update({ title, slug: title, meta, status });
        } catch (error) {
          console.log(error);
        }
        break;
      case "Speaker":
        try {
          await wp
            .speaker()
            .id(id)
            .update({ title, status });
        } catch (error) {
          console.log(error);
        }
        break;
      case "Sponsor":
        try {
          await wp
            .sponsor()
            .id(id)
            .update({ title, status });
        } catch (error) {
          console.log(error);
        }
        break;
      case "Partner":
        try {
          await wp
            .partner()
            .id(id)
            .update({ title, status });
        } catch (error) {
          console.log(error);
        }
        break;
    }
  };

  //Delete a post type based on the "type" param
  const deletePostType = async (type, id) => {
    switch (type) {
      case "Event":
        try {
          await wp
            .event()
            .id(id)
            .delete();
        } catch (error) {
          console.log(error);
        }
        break;
      case "Speaker":
        try {
          await wp
            .speaker()
            .id(id)
            .delete();
        } catch (error) {
          console.log(error);
        }
        break;
      case "Sponsor":
        try {
          await wp
            .sponsor()
            .id(id)
            .delete();
        } catch (error) {
          console.log(error);
        }
        break;
      case "Partner":
        try {
          await wp
            .partner()
            .id(id)
            .delete();
        } catch (error) {
          console.log(error);
        }
        break;
    }
  };

  return <div></div>;
};

export default LoggedIn;

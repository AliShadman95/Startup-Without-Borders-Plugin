import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ChaptersPage from "../containers/components/Frontend/ChaptersPage";
var WPAPI = require("wpapi");

export default function Shortcode(props) {
  const { wpObject } = props;
  console.log(wpObject);
  const [signup, setSignup] = useState(false);
  const [open, setOpen] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    wp = new WPAPI({
      endpoint: wpObject.api_url,
      nonce: wpObject.api_nonce
    });

    // usres api
    wp.users().get((err, data) => {
      if (err) {
        console.log(err);
      }
      setUsers(data);
    });

    var namespace = "wp/v2";
    // chapters api
    var route = "/chapter/(?P<id>)";
    wp.chapter = wp.registerRoute(namespace, route);

    wp.chapter()
      .get(function(err, data) {
        if (err) {
          console.error(err);
        }
        console.log(data);
      })
      .then(res => {
        setChapters(res);
      });

    //Event
    var route = "/event/(?P<id>)";
    wp.event = wp.registerRoute(namespace, route, {
      params: ["author"]
    });

    wp.event()
      .get(function(err, data) {
        if (err) {
          console.error(err);
        }
      })
      .then(res => {
        setEvents(res);
      });

    // Media

    wp.media()
      .perPage(100, function(err, data) {
        if (err) {
          console.error(err);
        }
        console.log(data);
      })
      .then(res => {
        setMedia(res);
      });
  }, []);

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
      <ChaptersPage
        url={wpObject.plugin_url}
        events={events}
        chapters={chapters}
        media={media}
        handleOpenChapter={handleOpenChapter}
      />
    </div>
  );
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
};

import React, { useState, useEffect } from "react";
import SimpleSlider from "./SimpleSlider";
var WPAPI = require("wpapi");
export default function Events({
  wpUrl,
  idChapters,
  events,
  chapters,
  search
}) {
  const [newEvent, setNewEvent] = useState([]);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (idChapters !== 0) {
      let n = events.find(item => item.chapter[0] === idChapters);

      setNewEvent([n]);
    } else if (search !== "") {
      let id = chapters.find(
        item => item.slug.toLowerCase() === search.toLowerCase()
      );
      console.log(id);
      let s = events.find(item => item.chapter[0] === id.id);
      setNewEvent([s]);
    } else {
      setNewEvent(events);
    }
  }, [events, idChapters, search]);

  useEffect(() => {
    wp = new WPAPI({
      endpoint: wpUrl.api_url,
      nonce: wpUrl.api_nonce
    });

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
  }, [wp]);

  return (
    <React.Fragment>
      <SimpleSlider events={newEvent} media={media} chapters={chapters} />
    </React.Fragment>
  );
}

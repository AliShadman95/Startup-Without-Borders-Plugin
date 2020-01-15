import React, { useState, useEffect } from "react";
import SimpleSlider from "./SimpleSlider";
export default function Events({
  media,
  idChapters,
  events,
  chapters,
  search
}) {
  const [newEvent, setNewEvent] = useState([]);

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

  return (
    <React.Fragment>
      <SimpleSlider events={newEvent} media={media} chapters={chapters} />
    </React.Fragment>
  );
}

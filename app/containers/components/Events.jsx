import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Event from "./Event";
import CreateEvent from "./CreateEvent";

import { getPostType } from "../helpers/Crud";

const Events = ({ wp }) => {
  const [images, setImages] = useState([]);
  const [events, setEvents] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [partners, setPartners] = useState([]);
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    getMedia();
    getPostType("Event").then(eve => {
      setEvents(eve);
    });
    getPostType("Sponsor").then(res => {
      setSponsors(res);
    });
    getPostType("Speaker").then(res => {
      setSpeakers(res);
    });
    getPostType("Partner").then(res => {
      setPartners(res);
    });
  }, []);

  const getMedia = () => {
    wp.media()
      .author(1)
      .then(res => {
        setImages(
          res.map(img => {
            return { url: img.source_url, id: img.id };
          })
        );
      });
  };

  const addEvent = newEvent => {
    setEvents(events => [newEvent, ...events]);
  };

  const updateEvent = updatedEvent => {
    console.log("events", events);
    console.log("updatedeve", updatedEvent);
    const index = events.findIndex(event => event.id === updatedEvent.id);
    console.log(index);
    if (index !== -1) {
      setEvents(
        events.map((event, i) => {
          if (i === index) {
            return updatedEvent;
          } else {
            return event;
          }
        })
      );
    }
  };

  const addImage = newImage => {
    console.log("inside update im", newImage);
    setImages(images => [
      ...images,
      { url: newImage.source_url, id: newImage.id }
    ]);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesPerRow: 3,
    rows: 2,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Events</h1>
          </div>
          <CreateEvent
            speakers={speakers}
            partners={partners}
            sponsors={sponsors}
            addEvent={addEvent}
            addImage={addImage}
            images={images}
            events={events}
          />
        </div>
      </div>

      <p>Create and manage events.</p>

      <Slider {...settings}>
        {events.map((event, index) => {
          return (
            <div
              key={event.id}
              className={`col-md-4 ${
                index % 3 === 0 || index % 4 === 0 || index % 5 === 0
                  ? "mt-4"
                  : ""
              }`}
            >
              <Event
                imageUrl={
                  images.find(img => img.id === event.featured_media) &&
                  images.find(img => img.id === event.featured_media).url
                }
                imageId={event.featured_media}
                id={event.id}
                title={event.title.rendered}
                description={event.meta.Description}
                date={event.meta.Date}
                place={event.meta.Place}
                selectedSponsors={event.meta.Sponsors}
                selectedPartners={event.meta.Partners}
                selectedSpeakers={event.meta.Speakers}
                addImage={addImage}
                updateEvent={updateEvent}
                speakers={speakers}
                partners={partners}
                sponsors={sponsors}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Events;

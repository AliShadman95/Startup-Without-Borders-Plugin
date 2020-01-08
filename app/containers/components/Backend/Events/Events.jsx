import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Event from "./Event";
import CreateEvent from "./CreateEvent";

import { getPostType } from "../../../helpers/Crud";

const Events = ({ wp, src }) => {
  const [images, setImages] = useState([]);
  const [events, setEvents] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [partners, setPartners] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  console.log(src);

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

  const deleteEvent = id => {
    setEvents(events.filter(event => event.id !== id));
  };

  const addImage = newImage => {
    console.log("inside update im", newImage);
    setImages(images => [
      ...images,
      { url: newImage.source_url, id: newImage.id }
    ]);
  };
  const SampleNextArrow = props => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "dimgrey" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = props => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "dimgrey" }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesPerRow: 3,
    rows: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="container pl-2 pr-2">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <img
              src={src.plugin_url + "images/events.svg"}
              alt="Events"
              style={{ width: "40%" }}
            />
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

      <p className="ml-3">Create and manage events.</p>
      <div className="container">
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
                  deleteEvent={deleteEvent}
                  speakers={speakers}
                  partners={partners}
                  sponsors={sponsors}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Events;

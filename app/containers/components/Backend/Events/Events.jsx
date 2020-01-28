import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Event from "./Event";
import CreateEvent from "./CreateEvent";

import { getPostType } from "../../../helpers/Crud";

import { connect } from "react-redux";

const Events = ({ wp, events }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getMedia();
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
            <h1>Events</h1>
          </div>
          <CreateEvent setImages={setImages} images={images} />
        </div>
      </div>

      <p>Create and manage events.</p>
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
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  events: state.events.items
});

export default connect(mapStateToProps, {})(Events);

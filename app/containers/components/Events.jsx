import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Event from "./Event";
import Button from "@material-ui/core/Button";

const Events = ({
  wp,
  events,
  createPostType,
  updatePostType,
  deletePostType
}) => {
  const [images, setImages] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  useEffect(() => {
    getMedia();
    // the trick
    setTimeout(() => {
      forceUpdate();
    }, 50);
  }, []);

  const getMedia = async () => {
    const data = await wp.media().get();
    setImages(
      data.map(media => {
        return media.source_url;
      })
    );
    console.log(data);
  };

  const sliderBehaviour = () => {
    let dividedEvents = Array(Math.ceil(events.length / 6)).fill(0);
    console.log(dividedEvents);
    let startIndex = 0;
    let endIndex = 6;

    return dividedEvents.map((e, index) => {
      if (index !== 0) {
        startIndex += 6;
        endIndex += 6;
      }

      return (
        <div key={index} className="container">
          <div className="row">
            {events.slice(startIndex, endIndex).map((event, index) => {
              return (
                <div
                  key={event.id}
                  className={`col-md-4 ${index >= 3 ? "mt-4" : ""}`}
                >
                  <Event image={images[0]} />
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Events</h1>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Button variant="contained" color="primary">
              Create event
            </Button>
          </div>
        </div>
      </div>

      <p>Create and manage events.</p>
      <Slider {...settings}>{sliderBehaviour()}</Slider>
    </div>
  );
};

export default Events;

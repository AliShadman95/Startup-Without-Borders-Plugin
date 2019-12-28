import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Event from "./Event";

const Events = ({ wp }) => {
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

  return (
    <div>
      <h1>Events</h1>
      <p>Create and manage events.</p>
      <Slider {...settings}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Event image={images[0]} />
            </div>
            <div className="col-md-4">
              <Event image={images[0]} />
            </div>
            <div className="col-md-4">
              <Event image={images[0]} />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <Event image={images[0]} />
            </div>
            <div className="col-md-4">
              <Event image={images[0]} />
            </div>
            <div className="col-md-4">
              <Event image={images[0]} />
            </div>
          </div>
        </div>
        <div>
          <Event image={images[0]} />
        </div>
      </Slider>
    </div>
  );
};

export default Events;

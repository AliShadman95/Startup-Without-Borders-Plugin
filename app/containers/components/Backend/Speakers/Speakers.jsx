import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Speaker from "./Speaker";
import CreateSpeaker from "./CreateSpeaker";
import { getPostType } from "../../../helpers/Crud";
import { connect } from "react-redux";

const Speakers = ({ speakers }) => {
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

  const updateSpeaker = updatedSpeaker => {
    const index = speakers.findIndex(
      speaker => speaker.id === updatedSpeaker.id
    );
    console.log(index);
    if (index !== -1) {
      setSpeakers(
        speakers.map((speaker, i) => {
          if (i === index) {
            return updatedSpeaker;
          } else {
            return speaker;
          }
        })
      );
    }
  };

  const deleteSpeaker = id => {
    setSpeakers(speakers.filter(speaker => speaker.id !== id));
  };

  const addImage = newImage => {
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
            <h1>Speakers</h1>
          </div>
          <CreateSpeaker
            addImage={addImage}
            images={images}
            setImages={setImages}
          />
        </div>
      </div>

      <p>Create and manage speakers.</p>
      <div className="container">
        <Slider {...settings}>
          {speakers.map((speaker, index) => {
            return (
              <div
                key={speaker.id}
                className={`col-md-4 ${
                  index % 3 === 0 || index % 4 === 0 || index % 5 === 0
                    ? "mt-4"
                    : ""
                }`}
              >
                <Speaker
                  imageUrl={
                    images.find(img => img.id === speaker.featured_media) &&
                    images.find(img => img.id === speaker.featured_media).url
                  }
                  imageId={speaker.featured_media}
                  id={speaker.id}
                  title={speaker.title.rendered}
                  addImage={addImage}
                  updateSpeaker={updateSpeaker}
                  deleteSpeaker={deleteSpeaker}
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
  speakers: state.speakers.items
});

export default connect(mapStateToProps, {})(Speakers);

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Team from "./Team";
import CreateTeam from "./CreateTeam";
import { getPostType } from "../../../helpers/Crud";

const Teams = () => {
  const [images, setImages] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getMedia();

    getPostType("Team").then(res => {
      setTeams(res);
    });
  }, []);

  // Get image from the author(Admin of the chapter)
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

  const addTeams = newTeam => {
    setTeams(teams => [newTeam, ...teams]);
  };

  const updateTeams = updatedTeam => {
    const index = teams.findIndex(team => team.id === updatedTeam.id);
    console.log(index);
    if (index !== -1) {
      setTeams(
        teams.map((team, i) => {
          if (i === index) {
            return updatedTeam;
          } else {
            return team;
          }
        })
      );
    }
  };

  const deleteTeams = id => {
    setTeams(teams.filter(team => team.id !== id));
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
            <h1>Teams</h1>
          </div>
          <CreateTeam
            addTeam={addTeams}
            addImage={addImage}
            images={images}
            setImages={setImages}
          />
        </div>
      </div>

      <p>Create and manage team members.</p>
      <div className="container">
        <Slider {...settings}>
          {teams.map((team, index) => {
            return (
              <div
                key={team.id}
                className={`col-md-4 ${
                  index % 3 === 0 || index % 4 === 0 || index % 5 === 0
                    ? "mt-4"
                    : ""
                }`}
              >
                <Team
                  imageUrl={
                    images.find(img => img.id === team.featured_media) &&
                    images.find(img => img.id === team.featured_media).url
                  }
                  imageId={team.featured_media}
                  id={team.id}
                  title={team.title.rendered}
                  addImage={addImage}
                  updateTeam={updateTeams}
                  deleteTeam={deleteTeams}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Teams;

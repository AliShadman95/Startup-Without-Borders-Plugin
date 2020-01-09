import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import Partner from "./Partner";
import CreatePartner from "./CreatePartner";
import {
  getPostType,
  deletePostType,
  createPostType,
  updatePostType
} from "../../../helpers/Crud";

const Partners = () => {
  const [listPartner, setListPartner] = useState([]); // Partner's array
  const [images, setImages] = useState([]); // Partner's Image array

  useEffect(() => {
    getPostType("Partner").then(resp => {
      setListPartner(resp);
    });

    getPostType("Media").then(resp => {
      setImages(
        resp.map(img => {
          return { url: img.source_url, id: img.id };
        })
      );
    });
  }, []);

  const handleDeletePartner = (id) => {
    const newlistPartner = listPartner.filter(
      elemento => elemento.id !== id
    );
    setListPartner(newlistPartner);
  };

  const handleAddNewPartner = (partnerName, featuredMediaIdImage) => {
    createPostType(
      "Partner",
      partnerName,
      featuredMediaIdImage,
      "publish"
    ).then(respObj => {
      setListPartner([respObj, ...listPartner]);
    });
  };

  const handleEditPartnerName = (newNameEdit, partnerId, imageId) => {
    updatePostType(
      "Partner",
      partnerId,
      newNameEdit,
      imageId,
      {},
      "publish"
    ).then(data => {
      const index = listPartner.findIndex(i => i.id === partnerId);
      const listPartnerUpdate = [...listPartner];
      listPartnerUpdate[index] = data;
      setListPartner([...listPartnerUpdate]);
    });
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

  const settings = {
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

  // listPartner.length > 0 && console.log("Obj listPartner", listPartner);
  // image.length > 0 && console.log("Obj image", image);

  return (
    <div className="container pl-2 pr-2">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Partners</h1>
          </div>
          <CreatePartner
            handleAddNewPartner={handleAddNewPartner}
            setImage={setImages}
            image={images}
          />
        </div>
      </div>

      <p>Create and manage partners.</p>
      <div className="container">
        <Slider {...settings}>
          {listPartner.map((partner, index) => (
            <div
              key={partner.id}
              className={`col-md-4 ${
                index % 3 === 0 || index % 4 === 0 || index % 5 === 0
                  ? "mt-4"
                  : ""
              }`}
            >
              <Partner
                handleEditPartnerName={handleEditPartnerName}
                handleDeletePartner={handleDeletePartner}
                title={partner.title.rendered}
                linkImagePartner={
                  images.find(img => img.id === partner.featured_media) &&
                  images.find(img => img.id === partner.featured_media).url
                }
                partnerId={partner.id}
                imageId={partner.featured_media}
                altText={
                  images.find(img => img.id === partner.featured_media) &&
                  images.find(img => img.id === partner.featured_media).alt_text
                }
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import CardPartner from "./CardPartner";
import FormPartner from "./FormPartner";
import {
  getPostType,
  deletePostType,
  createPostType,
  updatePostType
} from "../../../helpers/Crud";

function Partner() {
  const [listPartner, setListPartner] = useState([]); // Partner's array
  const [images, setImages] = useState([]); // Partner's Image array

  useEffect(() => {
    getPostType("Partner").then(resp => {
      setListPartner(resp);
    });

    getPostType("Media").then(resp => {
      setImages(resp);
    });
  }, []);

  const handleDeletePartner = (partnerId, imageId) => {
    deletePostType("Partner", partnerId).then(resp =>
      console.log("Partner delete - id: ", partnerId)
    );

    deletePostType("Media", imageId).then(resp =>
      console.log("img delete - id: ", imageId)
    );

    const newlistPartner = listPartner.filter(
      elemento => elemento.id !== partnerId
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
    console.log("partner aggiornato - newNameEdit", newNameEdit);
    console.log("partner aggiornato - partnerId", partnerId);
    updatePostType(
      "Partner",
      partnerId,
      newNameEdit,
      imageId,
      {},
      "publish"
    ).then(data => {
      // console.log("obj restituito dall'update", data);
      const index = listPartner.findIndex(i => i.id === partnerId);
      // console.log("index", index);
      const listPartnerUpdate = [...listPartner];
      listPartnerUpdate[index] = data;
      setListPartner([...listPartnerUpdate]);
    });
  };

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 2
  };

  // listPartner.length > 0 && console.log("Obj listPartner", listPartner);
  // image.length > 0 && console.log("Obj image", image);

  return (
    <div style={{ marginBottom: 30 }}>
      <FormPartner
        handleAddNewPartner={handleAddNewPartner}
        setImage={setImages}
        image={images}
      />
      {listPartner.length > 0 && (
        <div style={{ width: "60vw", margin: 30 }}>
          <Slider {...settings}>
            {listPartner.map((partner, index) => (
              <span key={index}>
                <CardPartner
                  handleEditPartnerName={handleEditPartnerName}
                  handleDeletePartner={handleDeletePartner}
                  title={partner.title.rendered}
                  linkImagePartner={
                    images.find(img => img.id === partner.featured_media) &&
                    images.find(img => img.id === partner.featured_media)
                      .source_url
                  }
                  partnerId={partner.id}
                  imageId={partner.featured_media}
                  altText={
                    images.find(img => img.id === partner.featured_media) &&
                    images.find(img => img.id === partner.featured_media)
                      .alt_text
                  }
                />
              </span>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default Partner;

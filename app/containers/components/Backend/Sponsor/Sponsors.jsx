import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import CardSponsor from "./CardSponsor";
import FormSponsor from "./FormSponsor";
import {
  getPostType,
  deletePostType,
  createPostType,
  updatePostType
} from "../../../helpers/Crud";

function Sponsors() {
  const [listSponsors, setListSponsors] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getPostType("Sponsor").then(resp => {
      setListSponsors(resp);
    });

    getPostType("Media").then(resp => {
      setImages(resp);
    });
  }, []);

  const handleDeleteSponsor = (sponsorId, imageId) => {
    deletePostType("Sponsor", sponsorId).then(resp =>
      console.log("sponsor delete - id: ", sponsorId)
    );

    deletePostType("Media", imageId).then(resp =>
      console.log("img delete - id: ", imageId)
    );

    const newlistSponsors = listSponsors.filter(
      elemento => elemento.id !== sponsorId
    );
    setListSponsors(newlistSponsors);
  };

  const handleAddNewSponsor = (sponsorName, featuredMediaIdImage) => {
    createPostType(
      "Sponsor",
      sponsorName,
      featuredMediaIdImage,
      "publish"
    ).then(respObj => {
      setListSponsors([respObj, ...listSponsors]);
    });
  };

  const handleEditSponsorName = (newNameEdit, sponsorId, imageId) => {
    console.log("sponsor aggiornato - newNameEdit", newNameEdit);
    console.log("sponsor aggiornato - sponsorId", sponsorId);
    updatePostType(
      "Sponsor",
      sponsorId,
      newNameEdit,
      imageId,
      {},
      "publish"
    ).then(data => {
      console.log("obj restituito dall'update", data);
      const index = listSponsors.findIndex(i => i.id === sponsorId);
      console.log("index", index);
      const listSponsorUpdate = [...listSponsors];
      listSponsorUpdate[index] = data;
      setListSponsors([...listSponsorUpdate]);
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

  // listSponsors.length > 0 && console.log("Obj listSponsors", listSponsors);
  // image.length > 0 && console.log("Obj image", image);

  return (
    <div style={{ marginBottom: 30 }}>
      <FormSponsor
        handleAddNewSponsor={handleAddNewSponsor}
        setImage={setImages}
        image={images}
      />
      {listSponsors.length > 0 && (
        <div style={{ width: "60vw", margin: 30 }}>
          <Slider {...settings}>
            {listSponsors.map((sponsor, index) => (
              <span key={index}>
                <CardSponsor
                  handleEditSponsorName={handleEditSponsorName}
                  handleDeleteSponsor={handleDeleteSponsor}
                  title={sponsor.title.rendered}
                  linkImageSponsor={
                    images.find(img => img.id === sponsor.featured_media) &&
                    images.find(img => img.id === sponsor.featured_media)
                      .source_url
                  }
                  sponsorId={sponsor.id}
                  imageId={sponsor.featured_media}
                  altText={
                    images.find(img => img.id === sponsor.featured_media) &&
                    images.find(img => img.id === sponsor.featured_media)
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

export default Sponsors;

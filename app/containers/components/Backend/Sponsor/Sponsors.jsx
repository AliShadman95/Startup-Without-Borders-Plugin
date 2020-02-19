import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import Sponsor from "./Sponsor";
import CreateSponsor from "./CreateSponsor";
import {
  getPostType,
  deletePostType,
  createPostType,
  updatePostType
} from "../../../helpers/Crud";

function Sponsors() {
  const [listSponsors, setListSponsors] = useState([]);
  const [images, setImages] = useState([]);
  console.log("listSponsors", listSponsors);

  useEffect(() => {
    getPostType("Sponsor").then(resp => {
      setListSponsors(resp);
    });

    getPostType("Media").then(resp => {
      setImages(
        resp.map(img => {
          return { url: img.source_url, id: img.id };
        })
      );
    });
  }, []);

  const handleDeleteSponsor = id => {
    const newlistSponsors = listSponsors.filter(elemento => elemento.id !== id);
    setListSponsors(newlistSponsors);
  };

  const handleAddNewSponsor = (
    sponsorName,
    featuredMediaIdImage,
    countryOrganization,
    companyAddress,
    postalCode,
    city,
    registrationNumber,
    businessEntityType,
    businessURLaddress,
    contactPointName,
    titleTwo,
    email
  ) => {
    createPostType(
      "Sponsor",
      sponsorName,
      featuredMediaIdImage,
      {
        CountryOrganization: countryOrganization,
        CompanyAddress: companyAddress,
        PostalCode: postalCode,
        City: city,
        RegistrationNumber: registrationNumber,
        BusinessEntityType: businessEntityType,
        BusinessURLaddress: businessURLaddress,
        ContactPointName: contactPointName,
        Title: titleTwo,
        Email: email
      },
      "publish"
    ).then(respObj => {
      console.log(respObj);
      setListSponsors([respObj, ...listSponsors]);
    });
  };

  const handleEditSponsorName = (
    newNameEdit,
    sponsorId,
    imageId,
    newCountryEdit,
    newCompanyAddressEdit,
    newPostalCodeEdit,
    newCityEdit,
    newRegistrationNumberEdit,
    newBusinessEntityTypeEdit,
    newBusinessURLaddress,
    newContactPointNameEdit,
    newTitleEdit,
    newEmailEdit
  ) => {
    // console.log("sponsor aggiornato - newNameEdit", newNameEdit);
    // console.log("sponsor aggiornato - sponsorId", sponsorId);
    updatePostType(
      "Sponsor",
      sponsorId,
      newNameEdit,
      imageId,

      {
        CountryOrganization: newCountryEdit,
        CompanyAddress: newCompanyAddressEdit,
        PostalCode: newPostalCodeEdit,
        City: newCityEdit,
        RegistrationNumber: newRegistrationNumberEdit,
        BusinessEntityType: newBusinessEntityTypeEdit,
        BusinessURLaddress: newBusinessURLaddress,
        ContactPointName: newContactPointNameEdit,
        Title: newTitleEdit,
        Email: newEmailEdit
      },
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

  // listSponsors.length > 0 && console.log("Obj listSponsors", listSponsors);
  // image.length > 0 && console.log("Obj image", image);

  return (
    <div className="container pl-2 pr-2">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Sponsors</h1>
          </div>
          <CreateSponsor
            handleAddNewSponsor={handleAddNewSponsor}
            setImage={setImages}
            image={images}
          />
        </div>
      </div>

      <p>Create and manage sponsors.</p>
      <div className="container">
        <Slider {...settings}>
          {listSponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className={`col-md-4 ${
                index % 3 === 0 || index % 4 === 0 || index % 5 === 0
                  ? "mt-4"
                  : ""
              }`}
            >
              <Sponsor
                handleEditSponsorName={handleEditSponsorName}
                handleDeleteSponsor={handleDeleteSponsor}
                title={sponsor.title.rendered}
                linkImageSponsor={
                  images.find(img => img.id === sponsor.featured_media) &&
                  images.find(img => img.id === sponsor.featured_media).url
                }
                sponsorId={sponsor.id}
                imageId={sponsor.featured_media}
                countryOrganization={sponsor.meta.CountryOrganization}
                companyAddress={sponsor.meta.CompanyAddress}
                postalCode={sponsor.meta.PostalCode}
                city={sponsor.meta.City}
                registrationNumber={sponsor.meta.RegistrationNumber}
                businessEntityType={sponsor.meta.BusinessEntityType}
                businessURLaddress={sponsor.meta.BusinessURLaddress}
                contactPointName={sponsor.meta.ContactPointName}
                titleTwo={sponsor.meta.Title}
                email={sponsor.meta.Email}
                altText={
                  images.find(img => img.id === sponsor.featured_media) &&
                  images.find(img => img.id === sponsor.featured_media).alt_text
                }
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Sponsors;

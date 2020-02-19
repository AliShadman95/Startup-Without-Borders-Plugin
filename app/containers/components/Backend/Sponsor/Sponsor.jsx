import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditSponsor from "./EditSponsor";
import DeleteSponsor from "./DeleteSponsor";
import DetailsSponsor from "./DetailsSponsor";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 180
  }
});

const Sponsor = ({
  title,
  linkImageSponsor,
  altText,
  sponsorId,
  imageId,
  countryOrganization,
  companyAddress,
  postalCode,
  city,
  registrationNumber,
  businessEntityType,
  handleDeleteSponsor,
  businessURLaddress,
  contactPointName,
  titleTwo,
  email,
  handleEditSponsorName
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={altText}
          // height="140"
          // image="http://localhost:8888/sitolocale/wp-content/uploads/2019/12/london.jpg"
          image={linkImageSponsor}
          title={altText}
        />
      </CardActionArea>
      <CardContent style={{ height: "80px", marginBottom: "5px" }}>
        <Typography gutterBottom variant="subtitle1" color="textSecondary">
          <p>Legal company name:</p>
          <Typography variant="subtitle1" color="textPrimary">
            {title}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: "5px" }} className="justify-content-end">
        <DetailsSponsor
          countryOrganization={countryOrganization}
          companyAddress={companyAddress}
          postalCode={postalCode}
          city={city}
          registrationNumber={registrationNumber}
          businessEntityType={businessEntityType}
          businessURLaddress={businessURLaddress}
          contactPointName={contactPointName}
          titleTwo={titleTwo}
          email={email}
        />
        <EditSponsor
          imageId={imageId}
          sponsorId={sponsorId}
          title={title}
          handleEditSponsorName={handleEditSponsorName}
        />
        <DeleteSponsor
          deleteSponsor={handleDeleteSponsor}
          imageId={imageId}
          id={sponsorId}
        />
      </CardActions>
    </Card>
  );
};

export default Sponsor;

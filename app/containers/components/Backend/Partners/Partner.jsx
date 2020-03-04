import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import EditPartner from "./EditPartner";
import DeletePartner from "./DeletePartner";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 180
  }
});

const Partner = ({
  title,
  linkImagePartner,
  altText,
  partnerId,
  imageId,
  handleDeletePartner,
  handleEditPartnerName
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={altText}
          image={linkImagePartner}
          title={altText}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" height="140">
          {title}
        </Typography>
      </CardContent>
      <CardActions className="justify-content-end">
        <EditPartner
          imageId={imageId}
          partnerId={partnerId}
          title={title}
          handleEditPartnerName={handleEditPartnerName}
        />
        <DeletePartner
          id={partnerId}
          imageId={imageId}
          deletePartner={handleDeletePartner}
        />
      </CardActions>
    </Card>
  );
};

export default Partner;

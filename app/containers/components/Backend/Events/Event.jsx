import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import moment from "moment";
import UpdateEvent from "./UpdateEvent";
import DeleteEvent from "./DeleteEvent";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 100
  }
});

const Event = ({
  imageUrl,
  imageId,
  id,
  title,
  description,
  date,
  address,
  addImage,
  updateEvent,
  sponsors,
  speakers,
  partners,
  deleteEvent
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        image={imageUrl}
        title="Contemplative Reptile"
      />

      <CardContent>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {description.substring(0, description.length - 5).substring(3)}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {moment(date.toString()).format("YYYY-MM-DD h:mm:ss a")}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {address
            .toString()
            .split("-")
            .join(" ")
            .split("+")
            .join("-")}
        </Typography>
      </CardContent>

      <CardActions className="justify-content-end">
        <UpdateEvent
          id={id}
          addImage={addImage}
          updateEvent={updateEvent}
          sponsors={sponsors}
          partners={partners}
          speakers={speakers}
          imageId={imageId}
        />
        <DeleteEvent deleteEvent={deleteEvent} id={id} />
      </CardActions>
    </Card>
  );
};

export default Event;

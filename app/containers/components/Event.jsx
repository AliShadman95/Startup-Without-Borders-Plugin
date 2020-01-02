import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import moment from "moment";
import UpdateEvent from "./UpdateEvent";

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
  place,
  selectedSponsors,
  selectedPartners,
  selectedSpeakers,
  addImage,
  updateEvent,
  sponsors,
  speakers,
  partners
}) => {
  const classes = useStyles();
  const handleClick = () => {};

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
          {description.join(" ")}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {moment(date).format("MM/DD/YYYY")}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {place.join(" ")}
        </Typography>
      </CardContent>

      <CardActions>
        <UpdateEvent
          id={id}
          prevTitle={title}
          prevDescription={description.join(" ")}
          prevDate={date}
          prevPlace={place.join(" ")}
          prevSelSponsors={selectedSponsors}
          prevSelPartners={selectedPartners}
          prevSelSpeakers={selectedSpeakers}
          addImage={addImage}
          updateEvent={updateEvent}
          sponsors={sponsors}
          partners={partners}
          speakers={speakers}
          prevImageId={imageId}
        />
        <IconButton onClick={handleClick}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Event;

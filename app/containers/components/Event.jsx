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

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 100
  }
});

const Event = ({ image, title }) => {
  const classes = useStyles();
  const handleClick = () => {};

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        src={image}
        title="Contemplative Reptile"
      />

      <CardContent>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton onClick={handleClick}>
          <EditIcon color="primary" />
        </IconButton>
        <IconButton onClick={handleClick}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Event;

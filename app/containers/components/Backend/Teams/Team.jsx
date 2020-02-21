import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import EditTeam from "./EditTeam";
import DeleteTeam from "./DeleteTeam";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 100
  }
});

const Team = ({
  imageUrl,
  imageId,
  id,
  title,
  addImage,
  updateTeam,
  deleteTeam
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
      </CardContent>
      <CardActions className="justify-content-end">
        <EditTeam
          id={id}
          prevTitle={title}
          addImage={addImage}
          updateTeam={updateTeam}
          imageId={imageId}
        />
        <DeleteTeam deleteTeam={deleteTeam} id={id} />
      </CardActions>
    </Card>
  );
};

export default Team;

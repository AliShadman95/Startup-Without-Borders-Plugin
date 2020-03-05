import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { updatePostType } from "../../../helpers/Crud";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const EditTeam = ({ prevTitle, id, imageId, addImage, updateTeam }) => {
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");

  useEffect(() => {
    setTitle(prevTitle);
  }, [prevTitle, imageId]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onEditClick = async () => {
    console.log("ON EDIT");
    updatePostType(
      "Team",
      id,
      title,
      imageId.toString(),
      description,
      {
        TwitterURL: twitterURL,
        FacebookURL: facebookURL,
        LinkedinURL: linkedinURL
      },
      "publish"
    ).then(res => {
      console.log(res);
      updateTeam(res);
      handleClose();
    });
  };
  const onFileUpload = res => {
    addImage(res);
    setImageId(res.id.toString());
  };
  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon color="primary" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle id="form-dialog-title">Edit a team member</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </DialogContentText>
          <div className="row">
            <div className="col-md-12">
              <InputLabel id="demo-mutiple-name-label">Title</InputLabel>
              <TextField
                id="standard-basic"
                fullWidth
                style={{ border: "0px !important" }}
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-3">
            <TextField
              id="outlined-multiline-static"
              label="Description"
              value={description}
              multiline
              rows="4"
              variant="outlined"
              fullWidth
              onChange={e => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">Twitter URL</InputLabel>
              <TextField
                id="standard-basic-2"
                fullWidth
                value={twitterURL}
                style={{ border: "0px !important" }}
                onChange={e => {
                  setTwitterURL(e.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">Facebook URL</InputLabel>
              <TextField
                id="standard-basic-3"
                fullWidth
                value={facebookURL}
                style={{ border: "0px !important" }}
                onChange={e => {
                  setFacebookURL(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">Linkedin URL</InputLabel>
              <TextField
                id="standard-basic-4"
                fullWidth
                value={linkedinURL}
                style={{ border: "0px !important" }}
                onChange={e => {
                  setLinkedinURL(e.target.value);
                }}
              />
            </div>
            <div className="col-md-6"></div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={onEditClick} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditTeam;

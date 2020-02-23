import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import UploadFile from "../../UploadFile";
import InputLabel from "@material-ui/core/InputLabel";
import { createPostType } from "../../../helpers/Crud";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const CreateTeam = ({ addTeam, setImages, images }) => {
  const [title, setTitle] = useState("");
  const [imageId, setImageId] = useState("0");
  const [open, setOpen] = useState(false);
  const [waitUploadMediaBool, setWaitUploadMediaBool] = useState(false);
  const [description, setDescription] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCreateClick = () => {
    createPostType(
      "Team",
      0,
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
      addTeam(res);
      setWaitUploadMediaBool(false);
      handleClose();
    });
  };

  const onFileUpload = res => {
    addImage(res);
    setImageId(res.id.toString());
  };

  return (
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add a team member
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth={"md"}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle id="form-dialog-title">Add a team member</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </DialogContentText>
          <div className="row">
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">Title</InputLabel>
              <TextField
                fullWidth
                style={{ border: "0px !important" }}
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <UploadFile
                setfeaturedMediaIdImage={setImageId}
                setWaitUploadMediaBool={setWaitUploadMediaBool}
                setImage={setImages}
                image={images}
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
          {waitUploadMediaBool === false ? (
            <p>Wait Upload Media</p>
          ) : (
            <Button onClick={onCreateClick} color="primary">
              Create
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateTeam;

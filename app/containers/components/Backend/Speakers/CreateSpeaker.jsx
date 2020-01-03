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

const CreateSpeaker = ({ addSpeaker, addImage, images }) => {
  const [title, setTitle] = useState("");
  const [imageId, setImageId] = useState("0");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCreateClick = () => {
    createPostType("Speaker", title, imageId.toString(), "publish").then(
      res => {
        addSpeaker(res);
        handleClose();
      }
    );
  };

  const onFileUpload = res => {
    addImage(res);
    setImageId(res.id.toString());
  };

  return (
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add a speaker
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
        <DialogTitle id="form-dialog-title">Create an event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </DialogContentText>
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <UploadFile onFileUpload={onFileUpload} />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={onCreateClick} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateSpeaker;

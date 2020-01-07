import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import UploadFile from "../../UploadFile";
import InputLabel from "@material-ui/core/InputLabel";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { updatePostType } from "../../../helpers/Crud";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const UpdateSpeaker = ({ prevTitle, id, imageId, addImage, updateSpeaker }) => {
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

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
      "Speaker",
      id,
      title,
      imageId.toString(),
      {},
      "publish"
    ).then(res => {
      console.log(res);
      updateSpeaker(res);
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
        maxWidth={"md"}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle id="form-dialog-title">Edit an event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </DialogContentText>
          <div className="row">
            <div className="col-md-12">
              <InputLabel id="demo-mutiple-name-label">Title</InputLabel>
              <TextField
                defaultValue={title}
                fullWidth
                style={{ border: "0px !important" }}
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />
            </div>
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

export default UpdateSpeaker;

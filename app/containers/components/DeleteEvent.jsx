import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { deletePostType } from "../helpers/Crud";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteEvent = ({ id, deleteEvent }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDeleteClick = () => {
    deletePostType("Event", id).then(res => {
      deleteEvent(id);
      handleClose();
    });
  };
  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon color="secondary" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth={"sm"}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle id="form-dialog-title">Delete an event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={onDeleteClick} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteEvent;

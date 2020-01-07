import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function EditSponsor({
  title,
  handleEditSponsorName,
  sponsorId,
  imageId
}) {
  const [open, setOpen] = React.useState(false);
  const [newNameEdit, setNewNameEdit] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewNameEdit("");
  };

  return (
    <div>
      <Button variant="text" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <b>Edit Sponsor's name</b>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please, change <b>{title}</b> to a new name.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New name"
            type="text"
            fullWidth
            onChange={e => setNewNameEdit(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleEditSponsorName(newNameEdit, sponsorId, imageId);
              handleClose();
            }}
            color="primary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

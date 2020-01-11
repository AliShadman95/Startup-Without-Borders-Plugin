import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import UploadFile from "../../UploadFile";

const CreateSponsor = ({ handleAddNewSponsor, setImage, image }) => {
  const [open, setOpen] = React.useState(false);
  const [sponsorName, setSponsorName] = React.useState("");
  const [featuredMediaIdImage, setfeaturedMediaIdImage] = React.useState(
    100000000
  );
  const [waitUploadMediaBool, setWaitUploadMediaBool] = React.useState(false);
  // console.log("sponsor name - formSponsor", sponsorName);
  // console.log("urlImg - formSponsor", urlImg);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSponsorName("");
    setOpen(false);
  };

  return (
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add new Sponsor
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sponsor registration</DialogTitle>
        <DialogContent>
          <DialogContentText>register a new sponsor</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder="Sponsor's name"
            label="Sponsor's name"
            type="text"
            onChange={e => setSponsorName(e.target.value)}
            fullWidth
          />
          <UploadFile
            setfeaturedMediaIdImage={setfeaturedMediaIdImage}
            setWaitUploadMediaBool={setWaitUploadMediaBool}
            setImage={setImage}
            image={image}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {waitUploadMediaBool === false ? (
            <p>Wait Upload Media</p>
          ) : (
            <Button
              onClick={() => {
                handleAddNewSponsor(sponsorName, featuredMediaIdImage);
                setWaitUploadMediaBool(false);
                handleClose();
              }}
              color="primary"
            >
              OK
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateSponsor;

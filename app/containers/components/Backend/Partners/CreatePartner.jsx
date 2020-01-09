import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import UploadFile from "../../UploadFile";

const CreatePartner = ({ handleAddNewPartner, setImage, image }) => {
  const [open, setOpen] = React.useState(false);
  const [partnerName, setPartnerName] = React.useState("");
  const [featuredMediaIdImage, setfeaturedMediaIdImage] = React.useState(
    100000000
  );
  const [waitUploadMediaBool, setWaitUploadMediaBool] = React.useState(false);
  // console.log("Partner name - formPartner", partnerName);
  // console.log("urlImg - formPartner", urlImg);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setPartnerName("");
    setOpen(false);
  };

  return (
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add new Partner
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Partner registration</DialogTitle>
        <DialogContent>
          <DialogContentText>register a new Partner</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder="Partner's name"
            label="Partner's name"
            type="text"
            onChange={e => setPartnerName(e.target.value)}
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
                handleAddNewPartner(partnerName, featuredMediaIdImage);
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

export default CreatePartner;

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";

export default function EditSponsor({
  title,
  handleEditSponsorName,
  sponsorId,
  imageId
}) {
  const [open, setOpen] = React.useState(false);
  const [newNameEdit, setNewNameEdit] = React.useState("");
  const [newCountryEdit, setCountryEdit] = React.useState("");
  const [newCompanyAddressEdit, setCompanyAddressEdit] = React.useState("");
  const [newPostalCodeEdit, setPostalCodeEdit] = React.useState("");
  const [newCityEdit, setCityEdit] = React.useState("");
  const [newRegistrationNumberEdit, setRegistrationNumberEdit] = React.useState(
    ""
  );
  const [newBusinessEntityTypeEdit, setBusinessEntityTypeEdit] = React.useState(
    ""
  );
  const [newBusinessURLaddress, setBusinessURLaddressEdit] = React.useState("");
  const [newContactPointNameEdit, setContactPointNameEdit] = React.useState("");
  const [newTitleEdit, setTitleEdit] = React.useState("");
  const [newEmailEdit, setEmailEdit] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      >
        <DialogTitle id="form-dialog-title">
          <b>Edit Sponsor's fields</b>
        </DialogTitle>
        <div className="row">
          <div class="col-6">
            <DialogContent>
              {/* <DialogContentText>
              Please, change <b>{title}</b> to a new name.
            </DialogContentText> */}
              <InputLabel id="demo-mutiple-name-label">
                New Company name:
              </InputLabel>
              <TextField
                autoFocus
                margin="dense"
                type="text"
                fullWidth
                onChange={e => setNewNameEdit(e.target.value)}
              />
            </DialogContent>
          </div>
          <div class="col-6">
            <DialogContent>
              <InputLabel id="demo-mutiple-name-label">
                Country of organization:
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                fullWidth
                onChange={e => setCountryEdit(e.target.value)}
              />
            </DialogContent>
          </div>
        </div>
        <div className="row">
          <div class="col-6">
            <DialogContent>
              <InputLabel id="demo-mutiple-name-label">
                Company Address:
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                fullWidth
                onChange={e => setCompanyAddressEdit(e.target.value)}
              />
            </DialogContent>
          </div>
          <div class="col-6">
            <DialogContent>
              <InputLabel id="demo-mutiple-name-label">Postal Code:</InputLabel>
              <TextField
                margin="dense"
                type="text"
                fullWidth
                onChange={e => setPostalCodeEdit(e.target.value)}
              />
            </DialogContent>
          </div>
        </div>
        <div className="row">
          <div class="col-6">
            <DialogContent>
              <InputLabel id="demo-mutiple-name-label">City:</InputLabel>
              <TextField
                margin="dense"
                type="text"
                fullWidth
                onChange={e => setCityEdit(e.target.value)}
              />
            </DialogContent>
          </div>
          <div class="col-6">
            <DialogContent>
              <InputLabel id="demo-mutiple-name-label">
                Tax\business registration number (VAT, SIREN, UTR, etc):
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                fullWidth
                onChange={e => setRegistrationNumberEdit(e.target.value)}
              />
            </DialogContent>
          </div>
        </div>
        <div className="row">
          <div class="col-6">
            <DialogContent>
              <InputLabel id="demo-mutiple-name-label">
                Business Entity Type:
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                fullWidth
                onChange={e => setBusinessEntityTypeEdit(e.target.value)}
              />
            </DialogContent>
          </div>
          <div class="col-6">
            <DialogContent>
              <InputLabel id="demo-mutiple-name-label">
                Business URL address:
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                fullWidth
                onChange={e => setBusinessURLaddressEdit(e.target.value)}
              />
            </DialogContent>
          </div>
        </div>
        <div className="row">
          <div class="col-6">
            <DialogContent>
              <InputLabel id="demo-mutiple-name-label">
                Contact Point Name:
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                fullWidth
                onChange={e => setContactPointNameEdit(e.target.value)}
              />
            </DialogContent>
          </div>
          <div class="col-6">
            <DialogContent>
              <InputLabel id="demo-mutiple-name-label">Title:</InputLabel>
              <TextField
                margin="dense"
                type="text"
                fullWidth
                onChange={e => setTitleEdit(e.target.value)}
              />
            </DialogContent>
          </div>
        </div>
        <div className="row">
          <div class="col-12">
            <DialogContent>
              <InputLabel id="demo-mutiple-name-label">Email:</InputLabel>
              <TextField
                margin="dense"
                type="text"
                fullWidth
                onChange={e => setEmailEdit(e.target.value)}
              />
            </DialogContent>
          </div>
        </div>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleEditSponsorName(
                newNameEdit,
                sponsorId,
                imageId,
                newCountryEdit,
                newCompanyAddressEdit,
                newPostalCodeEdit,
                newCityEdit,
                newRegistrationNumberEdit,
                newBusinessEntityTypeEdit,
                newBusinessURLaddress,
                newContactPointNameEdit,
                newTitleEdit,
                newEmailEdit
              );
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

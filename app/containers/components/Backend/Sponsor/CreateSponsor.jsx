import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import UploadFile from "../../UploadFile";

const CreateSponsor = ({ handleAddNewSponsor, setImage, image }) => {
  const [open, setOpen] = React.useState(false);
  const [sponsorName, setSponsorName] = React.useState("");
  const [countryOrganization, setCountryOrganization] = React.useState("");
  const [companyAddress, setCompanyAddress] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [city, setCity] = React.useState("");
  const [registrationNumber, setRegistrationNumber] = React.useState("");
  const [businessEntityType, setBusinessEntityType] = React.useState("");
  const [businessURLaddress, setBusinessURLaddress] = React.useState("");
  const [contactPointName, setContactPointName] = React.useState("");
  const [titleTwo, setTitleTwo] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [featuredMediaIdImage, setfeaturedMediaIdImage] = React.useState(
    100000000
  );
  const [waitUploadMediaBool, setWaitUploadMediaBool] = React.useState(false);
  // console.log("sponsor name - formSponsor", sponsorName);
  // console.log("countryOrganization - formSponsor", countryOrganization);

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
          <div className="row">
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">
                Legal company name
              </InputLabel>
              <TextField
                autoFocus
                margin="dense"
                type="text"
                onChange={e => setSponsorName(e.target.value)}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">
                Country of organization
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                onChange={e => setCountryOrganization(e.target.value)}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">
                Company Address
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                onChange={e => setCompanyAddress(e.target.value)}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">Postal Code</InputLabel>
              <TextField
                margin="dense"
                type="text"
                onChange={e => setPostalCode(e.target.value)}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">city</InputLabel>
              <TextField
                margin="dense"
                type="text"
                onChange={e => setCity(e.target.value)}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">
                Tax\business registration number (VAT, SIREN, UTR, etc)
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                onChange={e => setRegistrationNumber(e.target.value)}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">
                Business Entity Type:
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                onChange={e => setBusinessEntityType(e.target.value)}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">
                Business URL address:
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                onChange={e => setBusinessURLaddress(e.target.value)}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">
                Contact Point Name:
              </InputLabel>
              <TextField
                margin="dense"
                type="text"
                onChange={e => setContactPointName(e.target.value)}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">Title:</InputLabel>
              <TextField
                margin="dense"
                type="text"
                onChange={e => setTitleTwo(e.target.value)}
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">Email:</InputLabel>
              <TextField
                margin="dense"
                type="text"
                onChange={e => setEmail(e.target.value)}
                fullWidth
              />
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <UploadFile
              setfeaturedMediaIdImage={setfeaturedMediaIdImage}
              setWaitUploadMediaBool={setWaitUploadMediaBool}
              setImage={setImage}
              image={image}
            />
          </div>
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
                handleAddNewSponsor(
                  sponsorName,
                  featuredMediaIdImage,
                  countryOrganization,
                  companyAddress,
                  postalCode,
                  city,
                  registrationNumber,
                  businessEntityType,
                  businessURLaddress,
                  contactPointName,
                  titleTwo,
                  email
                );
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

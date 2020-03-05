import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function DetailsSponsor({
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
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Sponsor details
      </Button>
      <Dialog
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Sponsor details
        </DialogTitle>
        <DialogContent dividers>
          <div className="row">
            <div className="col-6">
              Country of organization: <p>{countryOrganization.join(" ")}</p>
            </div>
            <div className="col-6">
              Company Address: <p>{companyAddress.join(" ")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              Postal Code: <p>{postalCode.join(" ")}</p>
            </div>
            <div className="col-6">
              city: <p>{city.join(" ")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              Tax\business registration number (VAT, SIREN, UTR, etc):{" "}
              <p>{registrationNumber.join(" ")}</p>
            </div>
            <div className="col-6">
              Business Entity Type: <p>{businessEntityType.join(" ")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              Business URL address: <p>{businessURLaddress.join(" ")}</p>
            </div>
            <div className="col-6">
              Contact Point Name: <p>{contactPointName.join(" ")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              Title: <p>{titleTwo.join(" ")}</p>
            </div>
            <div className="col-6">
              Email: <p>{email.join(" ")}</p>
            </div>
          </div>
          {/* <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography> */}
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

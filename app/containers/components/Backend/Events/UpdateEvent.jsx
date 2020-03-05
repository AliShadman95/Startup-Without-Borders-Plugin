import "date-fns";
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
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import { updatePostType } from "../../../helpers/Crud";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import Slide from "@material-ui/core/Slide";
import moment from "moment";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const UpdateEvent = ({
  prevTitle,
  id,
  prevDescription,
  prevDate,
  prevPlace,
  prevSelSponsors,
  prevSelPartners,
  prevSelSpeakers,
  imageId,
  addImage,
  updateEvent,
  speakers,
  partners,
  sponsors
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [selectedSponsors, setSelectedSponsors] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState([]);
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("mm/dd/yyyy");

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSponsorChange = event => {
    setSelectedSponsors(event.target.value);
  };
  const handlePartnerChange = event => {
    setSelectedPartners(event.target.value);
  };
  const handleSpeakerChange = event => {
    console.log(event);
    setSelectedSpeakers(event.target.value);
  };

  const onEditClick = async () => {
    console.log("ON EDIT");
    updatePostType(
      "Event",
      id,
      title,
      imageId.toString(),
      description,
      {
        Sponsors: selectedSponsors.map(selSpo => {
          return sponsors
            .find(sponsor => sponsor.title.rendered === selSpo)
            .id.toString();
        }),
        Speakers: selectedSpeakers.map(selSpe => {
          return speakers
            .find(speaker => speaker.title.rendered === selSpe)
            .id.toString();
        }),
        Partners: selectedPartners.map(selPar => {
          return partners
            .find(partner => partner.title.rendered === selPar)
            .id.toString();
        }),
        Date: selectedDate,
        Address: address
      },
      "publish"
    ).then(res => {
      console.log(res);
      updateEvent(res);
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
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <div className="row">
            <div className="col-md-12">
              <InputLabel id="demo-mutiple-name-label">Title</InputLabel>
              <TextField
                placeholder={title}
                fullWidth
                style={{ border: "0px !important" }}
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-3">
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows="4"
              placeholder={description}
              variant="outlined"
              fullWidth
              onChange={e => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container>
                  <KeyboardDateTimePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    label="Select date"
                    disablePast
                    fullWidth
                    format="yyyy/MM/dd hh:mm a"
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </div>

            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">Address</InputLabel>
              <TextField
                placeholder={address}
                fullWidth
                style={{ border: "0px !important" }}
                onChange={e => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">Speakers</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                multiple
                value={selectedSpeakers}
                onChange={handleSpeakerChange}
                input={<Input />}
                renderValue={selected => selected.join(", ")}
                fullWidth
              >
                {speakers.map(speaker => (
                  <MenuItem key={speaker.id} value={speaker.title.rendered}>
                    <Checkbox
                      checked={
                        selectedSpeakers.indexOf(speaker.title.rendered) > -1
                      }
                    />
                    <ListItemText primary={speaker.title.rendered} />
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">Partners</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                multiple
                value={selectedPartners}
                onChange={handlePartnerChange}
                input={<Input />}
                renderValue={selected => selected.join(", ")}
                fullWidth
              >
                {partners.map(partner => (
                  <MenuItem key={partner.id} value={partner.title.rendered}>
                    <Checkbox
                      checked={
                        selectedPartners.indexOf(partner.title.rendered) > -1
                      }
                    />
                    <ListItemText primary={partner.title.rendered} />
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <InputLabel id="demo-mutiple-name-label">Sponsors</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                multiple
                value={selectedSponsors}
                onChange={handleSponsorChange}
                input={<Input />}
                renderValue={selected => selected.join(", ")}
                fullWidth
              >
                {sponsors.map(sponsor => (
                  <MenuItem key={sponsor.id} value={sponsor.title.rendered}>
                    <Checkbox
                      checked={
                        selectedSponsors.indexOf(sponsor.title.rendered) > -1
                      }
                    />
                    <ListItemText primary={sponsor.title.rendered} />
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="col-md-6"></div>
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

export default UpdateEvent;

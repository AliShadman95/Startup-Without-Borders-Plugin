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
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import { createPostType, createEvent } from "../../../helpers/Crud";
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

const CreateEvent = ({
  sponsors,
  partners,
  speakers,
  addEvent,
  setImages,
  images,
  events
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [selectedSponsors, setSelectedSponsors] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState([]);
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [imageId, setImageId] = useState("0");
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState("mm/dd/yyyy");
  const [waitUploadMediaBool, setWaitUploadMediaBool] = React.useState(false);

  useEffect(() => {
    setSelectedDate(moment().format());
  }, []);

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

  const onCreateClick = () => {
    let n = new Date(selectedDate);
    createEvent(
      [18],
      title,
      imageId.toString(),
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
        Date: n.toLocaleString(),
        Place: address,
        Description: description
      },
      "publish"
    ).then(res => {
      console.log(res);
      addEvent(res);
      setWaitUploadMediaBool(false);
      handleClose();
    });
  };

  const onFileUpload = res => {
    addImage(res);
    setImageId(res.id.toString());
  };

  return (
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create event
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
              <UploadFile
                setfeaturedMediaIdImage={setImageId}
                setWaitUploadMediaBool={setWaitUploadMediaBool}
                setImage={setImages}
                image={images}
              />
            </div>
          </div>
          <div className="mt-3">
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows="4"
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
                id="standard-basic-2"
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
          {waitUploadMediaBool === false ? (
            <p>Wait Upload Media</p>
          ) : (
            <Button onClick={onCreateClick} color="primary">
              Create
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateEvent;

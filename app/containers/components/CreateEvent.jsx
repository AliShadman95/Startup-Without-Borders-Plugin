import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import UploadFile from "../components/UploadFile";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import { createPostType } from "../helpers/Crud";

const CreateEvent = ({
  sponsors,
  partners,
  speakers,
  updateEvents,
  updateImages,
  images,
  events
}) => {
  const [title, setTitle] = useState("");
  const [selectedSponsors, setSelectedSponsor] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState([]);
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [imageId, setImageId] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSponsorChange = event => {
    setSelectedSponsor(event.target.value);
  };
  const handlePartnerChange = event => {
    setSelectedPartners(event.target.value);
  };
  const handleSpeakerChange = event => {
    console.log(event);
    setSelectedSpeakers(event.target.value);
  };

  const onCreateClick = () => {
    createPostType(
      "Event",
      5,
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
        })
      },
      "publish"
    ).then(res => {
      console.log(res);
      updateEvents(res);
      handleClose();
    });
  };

  const onFileUpload = res => {
    updateImages(res);
    setImageId(res.id);
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
      >
        <DialogTitle id="form-dialog-title">Create an event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <InputLabel id="demo-mutiple-name-label">Title</InputLabel>
          <TextField
            id="standard-basic"
            fullWidth
            style={{ border: "0px !important" }}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
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
              <UploadFile onFileUpload={onFileUpload} />
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onCreateClick} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateEvent;

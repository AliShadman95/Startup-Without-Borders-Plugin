import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Event from "./Event";
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
import { getPostType } from "../helpers/Crud";

const Events = ({ wp }) => {
  const [images, setImages] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [events, setEvents] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [partners, setPartners] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [selectedSponsors, setSelectedSponsor] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState([]);
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);

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
    setSelectedSpeakers(event.target.value);
  };
  useEffect(() => {
    getMedia();
    getPostType("Event").then(res => {
      setEvents(res);
    });
    getPostType("Sponsor").then(res => {
      setSponsors(res);
    });
    getPostType("Speaker").then(res => {
      setSpeakers(res);
    });
    getPostType("Partner").then(res => {
      setPartners(res);
    });
  }, []);

  const getMedia = async () => {
    const data = await wp.media().get();
    setImages(
      data.map(img => {
        return { url: img.source_url, id: img.id };
      })
    );
    console.log(data);
  };

  const sliderBehaviour = () => {
    let dividedEvents = Array(Math.ceil(events.length / 6)).fill(0);
    let startIndex = 0;
    let endIndex = 6;

    return dividedEvents.map((e, index) => {
      if (index !== 0) {
        startIndex += 6;
        endIndex += 6;
      }

      return (
        <div key={index} className="container">
          <div className="row">
            {events.slice(startIndex, endIndex).map((event, index) => {
              return (
                <div
                  key={event.id}
                  className={`col-md-4 ${index >= 3 ? "mt-4" : ""}`}
                >
                  <Event
                    image={
                      images.length >= 1
                        ? images.find(img => img.id === event.featured_media)
                            .url
                        : ""
                    }
                    title={event.title.rendered}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Events</h1>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
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
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
                </DialogContentText>

                <InputLabel id="demo-mutiple-name-label">Title</InputLabel>
                <TextField
                  id="standard-basic"
                  fullWidth
                  style={{ border: "0px !important" }}
                />
                <div className="row mt-3">
                  <div className="col-md-6">
                    <InputLabel id="demo-mutiple-name-label">
                      Speakers
                    </InputLabel>
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
                        <MenuItem
                          key={speaker.id}
                          value={speaker.title.rendered}
                        >
                          <Checkbox
                            checked={
                              selectedSpeakers.indexOf(speaker.title.rendered) >
                              -1
                            }
                          />
                          <ListItemText primary={speaker.title.rendered} />
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                  <div className="col-md-6">
                    <UploadFile />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <InputLabel id="demo-mutiple-name-label">
                      Sponsors
                    </InputLabel>
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
                        <MenuItem
                          key={sponsor.id}
                          value={sponsor.title.rendered}
                        >
                          <Checkbox
                            checked={
                              selectedSponsors.indexOf(sponsor.title.rendered) >
                              -1
                            }
                          />
                          <ListItemText primary={sponsor.title.rendered} />
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                  <div className="col-md-6">
                    <InputLabel id="demo-mutiple-name-label">
                      Partners
                    </InputLabel>
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
                        <MenuItem
                          key={partner.id}
                          value={partner.title.rendered}
                        >
                          <Checkbox
                            checked={
                              selectedPartners.indexOf(partner.title.rendered) >
                              -1
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
                <Button onClick={handleClose} color="primary">
                  Create
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>

      <p>Create and manage events.</p>
      {images.length >= 1 && <Slider {...settings}>{sliderBehaviour()}</Slider>}
    </div>
  );
};

export default Events;

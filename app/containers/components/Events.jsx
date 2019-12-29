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
import { getPostType } from "../helpers/Crud";

const Events = ({ wp }) => {
  const [images, setImages] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedSponsors, setSelectedSponsors] = useState("");
  const [events, setEvents] = useState([]);
  const [sponsors, setSponsors] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getMedia();
    getPostType("Event").then(res => {
      setEvents(res);
    });
    getPostType("Sponsor").then(res => {
      setSponsors(res);
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
                <TextField
                  id="standard-basic"
                  label="Title"
                  fullWidth
                  style={{ border: "0px !important" }}
                />
                <div className="mt-3">
                  <UploadFile />
                </div>
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6"></div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Subscribe
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

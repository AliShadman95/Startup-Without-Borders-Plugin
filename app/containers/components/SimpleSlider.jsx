import React from "react";
import Slider from "react-slick";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Class, Event, LocationOn } from "@material-ui/icons";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#343a40"
    }
  }
});

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      rows: 2,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            rows: 2,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            rows: 2,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            rows: 2,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      appendDots: dots => (
        <div
          style={{
            padding: "10px",
            bottom: "-5%"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "#343a40",
            border: "1px #343a40 solid"
          }}
        >
          {i + 1}
        </div>
      )
    };
    return (
      <Slider {...settings}>
        {this.props.events.map((event, index) => {
          return (
            <div className="col-12 mt-2" key={index}>
              <div className="card">
                <h5 className="card-title ml-3 mt-2">{event.title}</h5>
                <div className="container-img">
                  <img
                    src="http://source.unsplash.com/random/600x400"
                    className="card-img-top"
                    alt={event.title}
                  />
                </div>
                <div className="card-body">
                  <span className="info-events">
                    {" "}
                    <Event /> {event.date}{" "}
                  </span>
                  <span className="info-events float-right">
                    {" "}
                    <LocationOn /> {event.place}{" "}
                  </span>
                  <span className="d-block my-2">
                    <Class /> {event.category}
                  </span>
                  <p className="card-text">{event.par}</p>
                  <MuiThemeProvider theme={theme}>
                    <Button variant="contained" color="primary">
                      View Details
                    </Button>
                  </MuiThemeProvider>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    );
  }
}

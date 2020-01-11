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
  state = {
    events: []
  };
  componentDidMount() {
    const { events } = this.props;
    if (events.lenght > 0) {
      console.log(events);
      this.setState({
        events
      });
    }
  }

  render() {
    var settings = {
      dots: true,
      infinite: false,
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
    const { events, media } = this.props;
    return (
      <Slider {...settings}>
        {events.map((event, index) => {
          return (
            <div className="col-12 mt-2" key={index}>
              <div className="card">
                <h5 className="card-title ml-3 mt-2">{event.title.rendered}</h5>
                <div className="container-img">
                  <img
                    src={media
                      .filter(img => img.id === event.featured_media)
                      .map(url => url.source_url)}
                    className="card-img-top"
                    alt={event.title.rendered}
                  />
                </div>
                <div className="card-body">
                  <span className="info-events">
                    {" "}
                    <Event /> {event.meta.Date[0]}{" "}
                  </span>
                  <span className="info-events float-right">
                    {" "}
                    <LocationOn /> {event.meta.place}{" "}
                  </span>
                  <span className="d-block my-2">
                    <Class /> {"event.category"}
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quibusdam impedit aperiam iste provident dignissimos modi,
                    cum non fuga eum blanditiis.
                    {"event.par"}
                  </p>
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

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
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      },
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
            bottom: "-9%"
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
    const { events, media, chapters } = this.props;

    return (
      <Slider {...settings}>
        {events.map((event, index) => {
          return (
            <div className="container-fluid" key={index}>
              <div className="row">
                <div className="col-5">
                  <div className="container-img">
                    <img
                      src={media
                        .filter(img => img.id === event.featured_media)
                        .map(url => url.source_url)}
                      className="card-img-top"
                      alt={event.title.rendered}
                    />
                  </div>
                </div>
                <div className="col-7">
                  <h5 className="card-title ml-3 mt-2 text-center">
                    {event.title.rendered}
                  </h5>
                  <span className="info-events">
                    {" "}
                    <Event /> {event.meta.Date[0]}{" "}
                  </span>
                  <span className="info-events float-right">
                    {" "}
                    <LocationOn />{" "}
                    {chapters
                      .filter(chapter => chapter.id === event.chapter[0])
                      .map(url => url.name)}{" "}
                  </span>
                  <span className="d-block my-2">
                    <Class /> {"event.category"}
                  </span>
                  <p className="card-text mt-2">
                    {event.excerpt.rendered.substr(3, 67)}....
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

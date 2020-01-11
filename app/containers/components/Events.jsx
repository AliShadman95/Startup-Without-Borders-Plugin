import React, { Component } from "react";
import SimpleSlider from "./SimpleSlider";
var WPAPI = require("wpapi");
export default class Events extends Component {
  state = {
    events: [
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 1",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 2",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 3",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 4",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 5",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 6",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 7",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 8",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 9",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 10",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 11",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 12",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 13",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 14",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 15",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 16",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 17",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 18",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 19",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://source.unsplash.com/random/600x400",
        title: "Event 20",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      }
    ],
    newEvent: [],
    media: []
  };
  componentDidMount() {
    const { wpUrl, idChapters } = this.props;
    wp = new WPAPI({
      endpoint: wpUrl.api_url,
      nonce: wpUrl.api_nonce
    });
    // chapters api
    var namespace = "wp/v2";
    //Event
    var route = "/event/(?P<id>)";
    wp.event = wp.registerRoute(namespace, route, {
      params: ["author"]
    });
    wp.media()
      .perPage(100, function(err, data) {
        if (err) {
          console.error(err);
        }
        console.log(data);
      })
      .then(res => {
        this.setState({
          media: res
        });
      });

    wp.event()
      .get(function(err, data) {
        if (err) {
          console.error(err);
        }
      })
      .then(res =>
        this.setState({
          newEvent: res
        })
      );

    // Promises

    wp.event()
      .then(function(data) {})
      .catch(function(err) {
        console.error(err);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    let newEvent = this.state.newEvent.slice();
    if (prevProps.idChapters !== this.props.idChapters) {
      newEvent.filter(item => item.chapter === this.props.idChapters);
      this.setState({
        newEvent
      });
      console.log("ok");
    }
  }

  render() {
    const { newEvent, media } = this.state;
    console.log(this.props.idChapters);

    return (
      <React.Fragment>
        <SimpleSlider events={newEvent} media={media} />
      </React.Fragment>
    );
  }
}

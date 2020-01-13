// import React, { Component } from "react";
// import SimpleSlider from "./SimpleSlider";
// var WPAPI = require("wpapi");
// export default class Events extends Component {
//   state = {
//     // events: [
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 1",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 2",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 3",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 4",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 5",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 6",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 7",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 8",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 9",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 10",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 11",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 12",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 13",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 14",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 15",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 16",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 17",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 18",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 19",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   },
//     //   {
//     //     img: "http://source.unsplash.com/random/600x400",
//     //     title: "Event 20",
//     //     par:
//     //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
//     //     date: "27/12/2019",
//     //     place: "Rome",
//     //     category: "Party"
//     //   }
//     // ],
//     allEvents: [],
//     newEvent: [],
//     media: []
//   };
//   componentDidMount() {
//     const { wpUrl, events } = this.props;
//     console.log(this.props);

//     this.setState({
//       newEvent: events
//     });

//     wp = new WPAPI({
//       endpoint: wpUrl.api_url,
//       nonce: wpUrl.api_nonce
//     });

//     wp.media()
//       .perPage(100, function(err, data) {
//         if (err) {
//           console.error(err);
//         }
//         console.log(data);
//       })
//       .then(res => {
//         this.setState({
//           media: res
//         });
//       });
//   }
// componentDidUpdate(prevProps, prevState) {
//   let newEvent = this.state.allEvents.slice();
//   let newEvent = this.state.newEvent;

//   if (prevProps.idChapters !== this.props.idChapters) {
//     let n = allEvents.find(item => item.chapter[0] === this.props.idChapters);
//     newEvent.push(n);
//     this.setState({
//       newEvent
//     });
//     console.log("ok");
//   }
// }

//   render() {
//     const { newEvent, media } = this.state;
//     console.log(this.props.idChapters);
//     console.log(this.props.events);

//     return (
//       <React.Fragment>
//         <SimpleSlider events={newEvent} media={media} />
//       </React.Fragment>
//     );
//   }
// }

import React, { useState, useEffect } from "react";
import SimpleSlider from "./SimpleSlider";
var WPAPI = require("wpapi");
export default function Events({ wpUrl, idChapters, events, chapters}) {
  const [newEvent, setNewEvent] = useState([]);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (idChapters !== 0) {
      let n = events.find(item => item.chapter[0] === idChapters);

      setNewEvent([n]);
    } else {
      setNewEvent(events);
    }
  }, [events, idChapters]);

  useEffect(() => {
    wp = new WPAPI({
      endpoint: wpUrl.api_url,
      nonce: wpUrl.api_nonce
    });

    wp.media()
      .perPage(100, function(err, data) {
        if (err) {
          console.error(err);
        }
        console.log(data);
      })
      .then(res => {
        setMedia(res);
      });
  }, [wp]);

  return (
    <React.Fragment>
      <SimpleSlider events={newEvent} media={media} chapters={chapters} />
    </React.Fragment>
  );
}

import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
export default class Events extends Component {
  state = {
    events: [
      {
        img: "http://placehold.it/600x400/100",
        title: "Event 1",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/000",
        title: "Event 2",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/300",
        title: "Event 3",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/400",
        title: "Event 4",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/500",
        title: "Event 5",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/600",
        title: "Event 6",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/700",
        title: "Event 7",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/800",
        title: "Event 8",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/900",
        title: "Event 9",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/110",
        title: "Event 10",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/111",
        title: "Event 11",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/112",
        title: "Event 12",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/113",
        title: "Event 13",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/114",
        title: "Event 14",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/222",
        title: "Event 15",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/333",
        title: "Event 16",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/1231",
        title: "Event 17",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/666",
        title: "Event 18",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/fff",
        title: "Event 19",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      },
      {
        img: "http://placehold.it/600x400/777",
        title: "Event 20",
        par:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis culpa ipsam ab totam similique beatae fuga dolor sapiente enim.",
        date: "27/12/2019",
        place: "Rome",
        category: "Party"
      }
    ],
    startNum: 0,
    endNum: 6,
    someEvents: [],
    paginationArray: []
  };
  componentDidMount() {
    let someEvents = this.state.someEvents;
    let paginationArray = this.state.paginationArray;
    let events = this.state.events.slice();
    someEvents = events.splice(this.state.startNum, this.state.endNum);
    this.setState({
      someEvents
    });
    let pagination = Math.ceil(this.state.events.length / 6);

    for (var i = 1; i <= pagination; i++) {
      paginationArray.push(i);
    }
    this.setState({ paginationArray });
  }

  handleDecrement = () => {
    let events = this.state.events.slice();
    let startNum = this.state.startNum;
    let endNum = this.state.endNum;
    if (this.state.startNum >= 6) {
      startNum -= 6;
      endNum -= 6;
      this.setState({
        startNum,
        endNum,
        someEvents: events.slice(startNum, endNum)
      });
    } else {
      return null;
    }
  };
  handleIncrement = () => {
    let events = this.state.events.slice();
    let startNum = this.state.startNum;
    let endNum = this.state.endNum;
    if (this.state.endNum < this.state.events.length - 1) {
      startNum += 6;
      endNum += 6;
      this.setState({
        startNum,
        endNum,
        someEvents: events.slice(startNum, endNum)
      });
    } else {
      return;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.someEvents.map((event, index) => {
          return (
            <div className="col-4 mb-3" key={index}>
              <div className="card">
                <img
                  src={event.img}
                  className="card-img-top"
                  alt={event.title}
                />
                <div className="card-body">
                  <span className="info-events">
                    {" "}
                    <i className="far fa-calendar-alt"></i> {event.date}{" "}
                  </span>
                  <span className="info-events">
                    {" "}
                    <i className="fas fa-map-marker-alt"></i> {event.place}{" "}
                  </span>
                  <h5 className="card-title mt-2">{event.title}</h5>
                  <span>
                    <i className="fas fa-tags"></i> {event.category}
                  </span>
                  <p className="card-text">{event.par}</p>
                  <a
                    href={`http://localhost/wordpress/${event.title}`}
                    className="btn btn-outline-light"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <div className="container">
          <div className="row">
            {" "}
            <div className="col-3">
              <span
                onClick={this.handleDecrement}
                className={this.state.startNum === 0 ? "prev-displed" : "prev"}
              >
                <i className="fas fa-chevron-circle-left fa-fw fa-lg"></i> Prev
              </span>
            </div>
            <div className="col-6 d-flex justify-content-around">
              {this.state.paginationArray.map((num, index) => {
                return (
                  <span className="pagination" key={index}>
                    {num}
                  </span>
                );
              })}
            </div>
            <div className="col-3 text-right ">
              <span
                onClick={this.handleIncrement}
                className={
                  this.state.endNum < this.state.events.length - 1
                    ? "next"
                    : "next-displed"
                }
              >
                {" "}
                Next <i className="fas fa-chevron-circle-right fa-fw fa-lg"></i>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SimpleSlider from "./SimpleSlider";
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

    currentPage = num => {
        let firstIndex = num * 6 - 6;
        let someEvents = this.state.someEvents;
        someEvents = this.state.events.slice(firstIndex, num * 6);
        this.setState({
            someEvents,
            startNum: firstIndex,
            endNum: num * 6
        });
    };
    render() {
        console.log({ location });
        const { href } = this.props;
        const { events } = this.state;
        return (
            <React.Fragment>
                <SimpleSlider events={events} />
            </React.Fragment>
        );
    }
}

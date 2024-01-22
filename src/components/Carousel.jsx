import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            currImageIndex: 0,
        };
    }
    prev = () => {
        if (this.state.currImageIndex > 0) {
            this.setState({ currImageIndex: this.state.currImageIndex - 1 });
        } else {
            this.setState({ currImageIndex: images.length - 1 });
        }
    };

    next = () => {
        if (this.state.currImageIndex < images.length - 1) {
            this.setState({ currImageIndex: this.state.currImageIndex + 1 });
        } else {
            this.setState({ currImageIndex: 0 });
        }
    };

    render() {
        return (
            <>
                <div className="mainContainer">
                    <div className="btnContainer">
                        <div className="leftBtn" onClick={this.prev}>
                            <ArrowBackIosIcon style={{ fill: "white" }} />
                        </div>
                        <div className="rightBtn" onClick={this.next}>
                            <ArrowForwardIosIcon style={{ fill: "white" }} />
                        </div>
                    </div>
                    <div className="imageSpanContainer">
                        <span className="text title">{images[this.state.currImageIndex].title}</span>
                        <img src={images[this.state.currImageIndex].img} alt={images[this.state.currImageIndex].title} />
                        <span className="text subtitle">{images[this.state.currImageIndex].subtitle}</span>
                    </div>
                </div>
            </>
        );
    }
}

export default Carousel;

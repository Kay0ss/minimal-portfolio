import React from "react";
import "./cards.css";

class Intro extends React.Component {
  constructor(props) {
    super(props);

    const lockdown = require("../images/lockdown.png");
    const nolockdown = require("../images/no-lockdown.png");

    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [nolockdown, lockdown],
    };
  }
  switchImage() {
    const img = document.querySelector("img");
    console.log("it worked");
    img.classList.add("animate");
    setTimeout(() => {
      img.classList.remove("animate");
    }, 500);
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      img.classList.add("animate");
      setTimeout(() => {
        img.classList.remove("animate");
      }, 500);
      this.setState({
        currentImage: 0,
      });
    }

    return this.currentImage;
  }

  componentDidMount() {}

  render() {
    return (
      <div className="box intro">
        <div className="intro-content">
          <img
            className="profile-pic"
            src={this.state.images[this.state.currentImage]}
            alt="self portrait of me"
          />
          <p className="intro-text">
            I'm <span className="jack">jack</span>, I'm a full stack web
            developer with a focus on front end development from Minneapolis. I'm interested in Web Development, Design, Startups, and Creative Projects.
          </p>
          <button
            className="button-toggle"
            onClick={this.switchImage}
            // onClick={ZoomIn()}
            // ---------------------------------------
          >
            <svg
              id="Arrow_Rotate"
              data-name="Arrow, Rotate.2"
              xmlns="http://www.w3.org/2000/svg"
              width="15.702"
              height="15.702"
              viewBox="0 0 15.702 15.702"
            >
              <g
                id="Group_6"
                data-name="Group 6"
                transform="translate(2.62 2.617)"
              >
                <path
                  id="Path_5"
                  className="Path_5"
                  data-name="Path 5"
                  d="M14.8,12.032a5.229,5.229,0,0,1-9.824,2.482"
                  transform="translate(-4.34 -6.777)"
                  fill="none"
                  stroke="#0D1117"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                ></path>
                <path
                  id="Path_6"
                  className="Path_6"
                  data-name="Path 6"
                  d="M4,9.149A5.231,5.231,0,0,1,13.83,6.731"
                  transform="translate(-4.004 -4)"
                  fill="none"
                  stroke="#0D1117"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                ></path>
                <path
                  id="Path_7"
                  className="Path_7"
                  data-name="Path 7"
                  d="M15.953,6.952h2.313V4.639"
                  transform="translate(-8.135 -4.221)"
                  fill="none"
                  stroke="#0D1117"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                ></path>
                <path
                  id="Path_8"
                  className="Path_8"
                  data-name="Path 8"
                  d="M6.825,15.825H4.512v2.313"
                  transform="translate(-4.18 -8.088)"
                  fill="none"
                  stroke="#0D1117"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                ></path>
              </g>
              <path
                id="Path_9"
                className="Path_9"
                data-name="Path 9"
                d="M0,0H15.7V15.7H0Z"
                fill="none"
              ></path>
            </svg>
            <p>Toggle Lockdown</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Intro;


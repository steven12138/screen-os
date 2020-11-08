import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
  }
  nextPage() {
    console.log("finish play");
    this.props.nextPage();
  }
  render() {
    let element = <div>Blank</div>;
    if (this.props.type === 0) {
      element = (
        <div
          style={{
            height: "calc(100vh - 64px)",
            width: "100%",
            backgroundImage: "url(" + this.props.url + ")",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          alt=""
        ></div>
      );
    } else if (this.props.type === 1) {
      element = (
        <video
          onEnded={this.nextPage}
          autoPlay
          style={{ height: "calc(100vh - 70px)", width: "100%" }}
          src={this.props.url}
          id="Scroll_video"
        ></video>
      );
    } else if (this.props.type === 2) {
      element = (
        <iframe
          style={{ height: "calc(100vh - 10px)", width: "100%" }}
          src={this.props.url}
          frameBorder="0"
        ></iframe>
      );
    }
    return element;
  }
}

export default Player;

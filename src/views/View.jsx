import React from "react";
import ScrollPlay from "../components/ScrollPlay";

class View extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollPlay
        style={{ height: "100vh", width: "100vw" }}
        id={this.props.id}
      ></ScrollPlay>
    );
  }
}

export default View;

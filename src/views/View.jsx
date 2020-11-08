import React from "react";
import ScrollPlay from "../components/ScrollPlay";

class View extends React.Component {
  render() {
    return <ScrollPlay style={{ height: "calc(100vh - 64px)" }}></ScrollPlay>;
  }
}

export default View;

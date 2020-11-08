import React from "react";
import LoginBar from "../components/LoginBar";
import ScrollPlay from "../components/ScrollPlay";

class View extends React.Component {
  render() {
    return (
      <div>
        <LoginBar title="放映模式"></LoginBar>
        <ScrollPlay style={{ height: "calc(100vh - 64px)" }}></ScrollPlay>
      </div>
    );
  }
}

export default View;

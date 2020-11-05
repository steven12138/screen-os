import React from "react";
import Header from "../components/LoginBar";
import FloatingBtn from "../components/floating_btn";
// import Container from "@material-ui/core/Container";
import LoginBox from "../components/LoginBox";
// import Grid from "@material-ui/core/Grid";

class Home extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Header></Header>
        <div style={{ height: "calc(100vh - 64px)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <LoginBox></LoginBox>
          </div>
          <FloatingBtn changePage={this.props.changePage}></FloatingBtn>
        </div>
      </React.StrictMode>
    );
  }
}

export default Home;

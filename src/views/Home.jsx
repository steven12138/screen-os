import React from "react";
import Header from "../components/LoginBar";
import FloatingBtn from "../components/floating_btn";
import Container from "@material-ui/core/Container";

class Home extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Header></Header>
        <Container style={{ height: "calc(100vh - 64px)" }}>
          <FloatingBtn changePage={this.props.changePage}></FloatingBtn>
        </Container>
      </React.StrictMode>
    );
  }
}

export default Home;

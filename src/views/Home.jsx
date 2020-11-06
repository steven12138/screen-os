import React from "react";
import Header from "../components/LoginBar";
import FloatingBtn from "../components/floating_btn";
import LoginBox from "../components/LoginBox";
import BKImage from "../assets/bkg.jpg";

class Home extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Header changePage={this.props.changePage}></Header>
        <div
          style={{
            height: "calc(100vh - 64px)",
            backgroundSize: "cover",
            backgroundImage: `url(${BKImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
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

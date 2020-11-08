import React from "react";
import Header from "../components/LoginBar";
import FloatingBtn from "../components/floating_btn";
import FloatingBtnB from "../components/floating_btnB";
import LoginBox from "../components/LoginBox";
import BKImage from "../assets/bkg.jpg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header changePage={this.props.changePage} title="大屏管理"></Header>
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
          <FloatingBtn changePage={this.props.changePage} link="View1"></FloatingBtn>
          <FloatingBtnB changePage={this.props.changePage} link="View2"></FloatingBtnB>
        </div>
      </div>
    );
  }
}

export default Home;

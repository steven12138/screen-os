import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/Home";
import View from "./views/View";
import Admin from "./views/Admin";

class PageCtrl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Home",
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(name) {
    console.log(name);
    this.setState({
      page: name,
    });
  }
  render() {
    return (
      <React.StrictMode>
        {this.state.page === "Home" ? (
          <Home changePage={this.changePage} />
        ) : (
          ""
        )}
        {this.state.page === "View" ? <View /> : ""}
        {this.state.page === "Admin" ? <Admin /> : ""}
      </React.StrictMode>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <PageCtrl />
  </React.StrictMode>,
  document.getElementById("root")
);

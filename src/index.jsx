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
      <div>
        {this.state.page === "Home" && <Home changePage={this.changePage} />}
        {this.state.page === "View1" && <View id={1} />}
        {this.state.page === "View2" && <View id={2} />}
        {this.state.page === "Admin" && <Admin />}
      </div>
    );
  }
}

ReactDOM.render(<PageCtrl />, document.querySelector("#root"));

import React from "react";
import Fab from "@material-ui/core/Fab";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

class FloatingBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.changePage("View");
  }
  render() {
    return (
      <div
        style={{ position: "absolute", right: "25px", bottom: "25px" }}
        onClick={this.handleClick}
      >
        <Fab color="secondary" aria-label="BookmarkBorder">
          <BookmarkBorderIcon />
        </Fab>
      </div>
    );
  }
}

export default FloatingBtn;

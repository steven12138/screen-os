import React from "react";
import Player from "../components/Player";
import axios from "axios";
import LoginBar from "../components/LoginBar";

function ListPlayer(props) {
  const list = props.list;
  let nextPagefunc = props.nextPage;
  const listCard = list.map((item, index) =>
    props.page === index ? (
      <Player
        type={item.type}
        url={item.url}
        nextPage={nextPagefunc}
        key={index}
      ></Player>
    ) : (
      ""
    )
  );
  return <div>{listCard}</div>;
}

class ScrollPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      time: 5000,
      list: [],
    };
    this.tick = this.tick.bind(this);
  }
  refresh() {
    //TODO: 获取视频和更换时间
    console.log("WORKING");
  }
  componentDidMount() {
    this.refresh();
    if (this.state.list.length === 0) {
      return;
    }
    if (this.state.list[0].type !== 1) {
      this.next = setTimeout(() => {
        this.tick();
      }, this.state.time);
    }
  }
  tick() {
    let nxtp =
      this.state.page + 1 === this.state.list.length ? 0 : this.state.page + 1;
    if (nxtp === 0) {
      this.refresh();
    }
    this.setState({
      page: nxtp,
    });
    console.log("set next tick", nxtp);
    if (this.state.list[nxtp].type !== 1) {
      this.next = setTimeout(() => {
        this.tick();
      }, this.state.time);
    }
  }
  render() {
    return (
      <div>
        {(this.state.list.length === 0 ||
          this.state.list[this.state.page].type !== 2) && (
          <LoginBar title="放映模式"></LoginBar>
        )}
        <div style={{ backgroundColor: "black" }}>
          <ListPlayer
            list={this.state.list}
            page={this.state.page}
            nextPage={this.tick}
          />
        </div>
      </div>
    );
  }
}

export default ScrollPlay;

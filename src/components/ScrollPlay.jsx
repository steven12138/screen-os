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
    if (this.props.id === 2) {
      this.state = {
        page: 0,
        time: 5000,
        list: [
          {
            url: "https://s1.ax1x.com/2020/11/08/BTwxuF.png",
            type: 0,
          },
        ],
      };
    } else {
      this.state = {
        page: 0,
        time: 5000,
        list: [
          {
            url: "https://s1.ax1x.com/2020/11/08/BT03gf.png",
            type: 0,
          },
        ],
      };
    }
    this.tick = this.tick.bind(this);
  }
  refresh() {
    axios
      .get(
        "https://screen.steven12138z.xyz/php/getlist.php?device=" +
          this.props.id
      )
      .then((res) => {
        let data = res.data.data;
        // console.log(data);
        if (data.length === 0) return;
        this.setState({
          list: data,
        });
        // console.log(this.list);
      })
      .catch((res) => {
        console.error(res);
      });
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
          <LoginBar
            title={
              "放映模式·" +
              (this.props.id == 1 ? "左" : "右") +
              " " +
              (this.state.page + 1) +
              "/" +
              this.state.list.length
            }
          ></LoginBar>
        )}
        <div style={{ backgroundColor: "black", height: "calc(100vh - 64px)" }}>
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

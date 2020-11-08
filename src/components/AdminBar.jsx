import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SubITLogo from "../assets/SubIT.svg";
const useStyles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});
class adminBar extends React.Component {
  constructor(props) {
    super(props);
    this.modifyDrawer = this.modifyDrawer.bind(this);
  }
  modifyDrawer() {
    this.props.modifyDrawer();
    // console.log("GET");
  }
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            className={classes.menuButton}
            onClick={this.modifyDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            屏幕管理·后台
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              setTimeout(() => {
                window.open("https://pkuschool.github.io/SubIT/");
              }, 300);
            }}
          >
            <img src={SubITLogo} alt="SubIT" style={{ height: "50px" }} />
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(useStyles)(adminBar);

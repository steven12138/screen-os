import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SubITLogo from "../assets/SubIT.svg";
const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});
class AdminBar extends React.Component {
  constructor(props) {
    super(props);
    this.modifyDrawer = this.modifyDrawer.bind(this);
  }
  modifyDrawer() {
    this.props.modifyDrawer();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="menu"
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
              onClick={setTimeout(() => {
                window.open("https://pkuschool.github.io/SubIT/");
              }, 300)}
            >
              <img src={SubITLogo} alt="SubIT" style={{ height: "50px" }} />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(useStyles)(AdminBar);

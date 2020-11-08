import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
const drawerWidth = 160;
const useStyles = (theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
});
class pictureModify extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: this.props.isOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        
      </main>
    );
  }
}
export default withStyles(useStyles)(pictureModify);

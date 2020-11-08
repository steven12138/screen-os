import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Toolbar from "@material-ui/core/Toolbar";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
const drawerWidth = 160;
const useStyles = (theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});
class adminDrawer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        className={classes.Drawer}
        variant="persistent"
        anchor="left"
        open={this.props.isOpen}
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <List>
          {["图片管理", "预览"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Icon>add_circle</Icon> : <Icon>inbox</Icon>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

export default withStyles(useStyles)(adminDrawer);

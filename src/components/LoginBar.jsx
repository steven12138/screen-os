import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function About() {
  window.open("https://pkuschool.github.io/SubIT/");
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Icon>book_multiple_variant</Icon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            屏幕管理·Home
          </Typography>
          <Button color="inherit" onClick={About}>
            Powered By SubIT·steven12138
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

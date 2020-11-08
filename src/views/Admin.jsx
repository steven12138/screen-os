import React from "react";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { CallMissedSharp, CallReceived, FilterNone } from "@material-ui/icons";
import View from "./View";
import AdminBar from "../components/AdminBar";
const drawerWidth=240;
const useStyles = makeStyles(theme=>({//其实这里theme可以不用()
  root:{//主体CSS
    display: 'flex',
  },
  appBar:{//侧边栏退出
    transition: theme.transitions.create('width',{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift:{//侧边栏进入
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create('width',{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton:{//侧边栏按钮
    marginRight: theme.spacing(2),
  },
  hide:{//侧边栏藏起来
    display: null,
  },
  drawer:{
    width: drawerWidth,
    flexShrink: 0,//超出了也绝对不收缩
  },
  drawerPaper:{//侧边栏主题用Paper写
    width: drawerWidth,
  },
  drawerHeader:{
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0,1),
    ...theme.mixins.toobar,//为侧边栏下方留出空间
    justifyContent: 'flex-end',
  },
  content:{
    flexGrow:1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin',{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
  },
  contentShift:{
    transition: theme.transitions.create('margin',{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
  }
}))

class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state={
      drawer: false,
      page: "view",
    };
    this.modifyDrawer=this.modifyDrawer.bind(this);
  }
  modifyDrawer(){
    this.setState({
      drawer: !this.state.drawer,
    })
  }
  render(){
    const { classes } = this.props;
    return(
      <div className = {classes.root}>
        <AdminBar modifyDrawer={this.modifyDrawer}/>

      </div>
    );
  }
}

export default withStyles(useStyles,{withStyles: true})(Admin);
import React from "react";
import { withStyles} from "@material-ui/core/styles";
import AdminBar from "../components/AdminBar";
import AdminDrawer from "../components/AdminDrawer"
import Modify from "../components/Modify";
import CssBaseline from "@material-ui/core/CssBaseline";
const useStyles = theme=>({//其实这里theme可以不用
  root:{//主体CSS
    display: 'flex',
  },
})

class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state={
      drawer: false,
      page: "modify",
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
        <CssBaseline />
        <AdminBar modifyDrawer={this.modifyDrawer} isOpen={this.state.drawer}/>
        <AdminDrawer isOpen={this.state.drawer}/>
        <React.StrictMode>
          {this.state.page === "modify" && <Modify isOpen={this.state.drawer}/>}
        </React.StrictMode>
      </div>
    );
  }
}

export default withStyles(useStyles)(Admin);
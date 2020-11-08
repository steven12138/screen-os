import React from "react";
import { withStyles} from "@material-ui/core/styles";
import AdminBar from "../components/AdminBar";
import AdminDrawer from "../components/AdminDrawer"
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
        <AdminBar modifyDrawer={this.modifyDrawer} isOpen={this.state.drawer}/>
        <AdminDrawer isOpen={this.state.drawer}/>
      </div>
    );
  }
}

export default withStyles(useStyles,{withStyles: true})(Admin);
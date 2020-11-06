import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Lock from "@material-ui/icons/Lock";
import axios from "axios";
import Paper from '@material-ui/core/Paper';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      valid: true,
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
      valid: true,
    });
  }
  handleSubmit() {
    if (!this.state.password) {
      this.setState({
        valid: false,
      });
      return;
    }
    let params = new URLSearchParams();
    params.append("password", this.state.password);
    axios
      .post("", params)
      .then((res) => {
        let data = res.data;
        console.log(data);
      })
      .catch((res) => {
        console.error(res);
      });
  }
  render() {
    return (
      <Card style={{ width: "500px", maxHeight: "300px" }}>
        <CardContent style={{ padding: 0 }}>
          <Paper style={{
            padding: "20px 20px 15px 20px",
            borderRadius: "4px 4px 0 0",
            backgroundColor: "#3f51b5",
          }}>
            <Typography style={{ color: "white", fontSize: "1.5em" }}>
              登录
            </Typography>
          </Paper>
          <CardContent justify="center">
            <Grid
              container
              spacing={1}
              alignItems="flex-end"
              justify="center"
              style={{ margin: "20px" }}
            >
              <Grid item style={{ marginLeft: "-50px" }}>
                <Lock />
              </Grid>
              <Grid item>
                <TextField
                  error={!this.state.valid}
                  style={{ width: "360px", transition: "ease-in-out .25s all" }}
                  label="管理员密码"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions style={{ marginBottom: "10px", marginTop: "-10px" }}>
            <Grid container>
              <Grid item xs={10}></Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  登录
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

export default LoginBox;

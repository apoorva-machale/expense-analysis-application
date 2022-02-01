import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Grid, Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Alert from "@material-ui/lab/Alert";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    paddingTop: theme.spacing(7),
  },
  input: {
    paddingLeft: "8px",
  },
  helper: {
    color: "black",
  },
  paper: {
    padding: theme.spacing(7),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    borderRadius: "2px",
  },
}));

const LoginPage = (props) => {
  const classes = useStyles();
  const { error } = props;
  var errordisplay;

  if (error.name || error.password || props.user.error) {
    errordisplay = (
      <div>
        <Alert severity="error">Incorrect Username or Password</Alert>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="column">
          <form onSubmit={props.onSubmit}>
            <Grid container direction="column">
              <TextField
                color="secondary"
                margin="normal"
                required
                id="username"
                name="username"
                label="Username"
                onChange={props.onChange}
                value={props.user.email}
                {...props.error}
                InputProps={{
                  className: classes.input,
                }}
                FormHelperTextProps={{
                  className: classes.helper,
                }}
                helperText="Enter registered username "
              />

              <TextField
                color="secondary"
                margin="normal"
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                className={classes.textfield}
                onChange={props.onChange}
                value={props.user.password}
                {...props.error}
                InputProps={{
                  className: classes.input,
                }}
                FormHelperTextProps={{
                  className: classes.helper,
                }}
                helperText="Enter correct password  "
              />

              <Box variant="contained" color="primary" mx="auto" pb={2} pt={4}>
                {props.loading ? (
                  <CircularProgress color="primary" />
                ) : (
                  <Button variant="contained" color="primary" type="submit">
                    Login
                  </Button>
                )}
              </Box>
            </Grid>
          </form>
          <Divider variant="middle" />
          <Box variant="contained" color="primary" mx="auto" pt={2}>
            <Button variant="contained" color="primary" href="/signup">
              Signup
            </Button>
          </Box>
          <Box color="primary" mx="auto" pt={2}>
            {errordisplay}
          </Box>
        </Grid>
      </Paper>
    </div>
  );
};
export default LoginPage;

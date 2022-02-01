import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { PropTypes } from "prop-types";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    paddingTop: theme.spacing(7),
  },
  button: {
    paddingBlockStart: theme.spacing(2),
  },

  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    borderRadius: "2px",
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  const { error } = props;
  var errordisplay;
  if (error.username) {
    errordisplay = (
      <div>
        <Alert severity="error">Incorrect User Name</Alert>
      </div>
    );
  }
  if (error.password) {
    errordisplay = (
      <div>
        <Alert severity="error">Incorrect Password</Alert>
      </div>
    );
  }
  if (error.cpassword) {
    errordisplay = (
      <div>
        <Alert severity="error"> Password does not match</Alert>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <form onSubmit={props.onSubmit}>
        <Paper className={classes.paper}>
          <Grid container direction="column">
            <TextField
              color="secondary"
              required
              id="username"
              name="username"
              label="UserName"
              onChange={props.onChange}
              value={props.user.username}
              {...props.error}
              helperText="User name required with more than 3 characters"
            />
            <TextField
              margin="dense"
              color="secondary"
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={props.onChange}
              value={props.user.password}
              {...props.error}
              helperText="Password should contain digit,capital character,special character and should be more than 8 length"
            />
            <TextField
              margin="dense"
              color="secondary"
              required
              visibility="hidden"
              id="cpassword"
              name="cpassword"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              onChange={props.onChange}
              value={props.user.cpassword}
              {...props.error}
              helperText="Insert correct password"
            />
            <Box variant="contained" color="primary" mx="auto" pt={3}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Create Account
              </Button>
            </Box>
            <Box color="primary" mx="auto" pt={2}>
              {errordisplay}
            </Box>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

Signup.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
export default Signup;
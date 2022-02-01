import React, { useEffect, useState } from "react";
import LoginPage from "./LoginPage";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
// import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  progress: {
    display: "flex",
    justifyContent: "center",
    margin: "17px",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    login: JSON.parse(sessionStorage.getItem("login"))
      ? JSON.parse(sessionStorage.getItem("login")).login
      : false,
    store: "",
    error: false,
  });

  useEffect(() => {
    if (user.login) {
      toast.success("You are logged in ");
    }
  }, [user.login]);

  function formIsValid() {
    const _errors = {};
    const res = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const reset = res.test(user.password);

    if (!reset) {
      _errors.password = "password is required";
      console.log("incorrect password");
    }

    setErrors(_errors);
    //form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleChange({ target }) {
    // console.log("check target", target.value);
    setUser({
      ...user,
      error: false,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) return;
    setLoading(true);
    axios
      .post("/api/v1/users/login", user)
      .then((res) => {
        console.log("user logged in ");
        console.log("response", res.data);
        sessionStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            // token: res.data.token,
          })
        );

        const testLogin = JSON.parse(sessionStorage.getItem("login"));
        setUser({
          ...user,
          login: testLogin.login,
        });
        if (testLogin.login) {
          history("/budget");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
        setUser({ ...user, error: true });
      });
  }

  return (
    <div className="jumbotron">
      <LoginPage
        error={errors}
        user={user}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;

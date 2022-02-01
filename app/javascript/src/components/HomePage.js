import React, { useState } from "react";
import Signup from "../components/Signup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const HomePage = (props) => {
  // debugger;
  const history = useNavigate();
  const [errors, setErrors] = useState({});
  //const [checked, setChecked] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    cpassword: "",
  });

  function formIsValid() {
    const _errors = {};

    const res = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // apoorva98@Xp
    const reset = res.test(user.password);
    if (!(user.username.length >= 3)) {
      _errors.username = "User name should be more than length 3";
      console.log("incorect username");
    }
    if (!reset) {
      _errors.password = "Incorrect Password";
      console.log("incorect password");
    }
    if (!(user.password === user.cpassword)) {
      _errors.cpassword = "Password does not match";
      console.log("incorect match password");
    }

    setErrors(_errors);
    //form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) {
      console.log("invalid");
      return;
    }
    
    axios
      .post("/api/v1/users", user)
      .then((res) => {
        console.log("user saved");
        // console.log("response", res.data);
      })
      .catch((error) => console.log("Error", error));

    history("/");
    toast.success("user data saved");
  }

  return (
    <div className="jumbotron">
      {/* <NavBar /> */}
      <Signup
        error={errors}
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default HomePage;
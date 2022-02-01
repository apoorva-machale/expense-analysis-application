import React from "react";
import NotFoundPage from "./components/NotFoundPage";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import BudgetPage from "./components/BudgetPage";
import TransactionPage from "./components/TransactionPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Routes>
        <Route  path="/" element={<Login />}></Route>
        <Route  path="/signup" element={<HomePage />}></Route>
        <Route path="/budget" element={<BudgetPage />}></Route> 
        <Route path="/transaction" element={<TransactionPage />}></Route>
        <Route element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
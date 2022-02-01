import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Category from "./Category";
import NavBar from "./NavBar";
import Typography from "@material-ui/core/Typography";
import { Button, TextField, Box, Card, CardContent } from "@material-ui/core";
import {
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
  } from "@material-ui/core";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { toast } from "react-toastify";



const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
  },
  section: {
    justifyContent: "center",
    paddingTop: theme.spacing(7),
  },
  table: {
    border: "1px solid black",
    borderCollapse: "separate",
  },
  button: {
    paddingBlockStart: theme.spacing(2),
  },
  grid: {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
}));

const TransactionPage = (props) => {
  const classes = useStyles();

  const [transaction, setTransaction] = useState([]);
  

  useEffect(() => {
   
    axios({
        method: "get",
        url: "/api/v1/transactions/",
      })
        .then((transaction) => {
          setTransaction(transaction.data.data);
        })
        .catch((error) => {
          console.log("error", error);
          if (error) {
            toast.error("Error to display transaction");
          }
    });
  }, []);

  return (
    <div>
        <NavBar />
    <div className={classes.root}>
        <Paper className={classes.paper}>
        <Grid container className={classes.section} spacing={1}>
          <Grid item xs={12} sm={12}>
            <div className={classes.section}>
              <Card  elevation={8}>
                <CardContent>
                  <Typography color="textPrimary" gutterBottom variant="h5">
                    Your Transactions
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item sm={3}>
                    <Table
                        aria-label="simple table"
                        align="left"
                        className={classes.table}
                      >
                        <TableHead>
                          <TableRow>
                          <TableCell align="left">
                              <b>UserID</b>
                            </TableCell>
                            <TableCell align="left">
                              <b>Transaction Date(YYYY-MM-DD)</b>
                            </TableCell>
                            <TableCell align="left">
                              <b>Expense</b>
                            </TableCell>
                            <TableCell align="left">
                                <b>Item name</b>
                            </TableCell>
                            <TableCell align="left">
                                <b>CategoryID</b>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                          <TableBody>
                            {transaction &&
                              transaction.map((value) => (
                                <TableRow key={value.id}>
                                  <TableCell align="left">
                                    {value.userid}
                                  </TableCell>
                                  <TableCell align="left">
                                    {value.date}
                                  </TableCell>
                                  <TableCell align="left">
                                    {value.expense}
                                  </TableCell>
                                  <TableCell align="left">
                                    {value.itemname}
                                  </TableCell>
                                  <TableCell align="left">
                                    {value.categoryid}
                                  </TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
        </Paper>
    </div>
    </div>
  );
};


export default TransactionPage;
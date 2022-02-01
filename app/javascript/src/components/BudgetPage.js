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

const BudgetPage = (props) => {
  const classes = useStyles();

  const [category, setCategory] = useState([]);
  const [budget, setBudget] = useState([]);
  

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/v1/categories/",
    })
      .then((category) => {
        console.log("category", category.data.data);
        setCategory(category.data.data);
      })
      .catch((error) => {
        console.log("error", error);
        if (error) {
          toast.error("Error to display Category");
        }
      });
    
    axios({
        method: "get",
        url: "/api/v1/budgets/",
      })
        .then((budget) => {
          console.log("budget", budget.data.data);
          setBudget(budget.data.data);
        })
        .catch((error) => {
          console.log("error", error);
          if (error) {
            toast.error("Error to display Budget");
          }
    });
  }, []);

  return (
    <div>
        <NavBar />
    <div className={classes.root}>
      <form onSubmit={props.onSubmit}>
        <Paper className={classes.paper}>
        <Grid container className={classes.section} spacing={1}>
          <Grid item xs={12} sm={6}>
            <div className={classes.section}>
              <Card  elevation={8}>
                <CardContent>
                  <Typography color="textPrimary" gutterBottom variant="h5">
                    Your Budget
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
                              <b>Budget Month(YYYY-MM-DD)</b>
                            </TableCell>
                            <TableCell align="left">
                              <b>Budget</b>
                            </TableCell>
                            <TableCell align="left">
                                <b>Category</b>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                          <TableBody>
                            {budget &&
                              budget.map((value) => (
                                <TableRow key={value.budget_id}>
                                  <TableCell align="left">
                                    {value.userid}
                                  </TableCell>
                                  <TableCell align="left">
                                    {value.budget_month}
                                  </TableCell>
                                  <TableCell align="left">
                                    {value.budget}
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
                  <Grid container  spacing={1}>
                    <Grid item  sm={3}>
                             
                    </Grid>
                   </Grid>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.grid}>
            <Category category={category}/>
          </Grid>
        </Grid>
        </Paper>
      </form>
    </div>
    </div>
  );
};


export default BudgetPage;
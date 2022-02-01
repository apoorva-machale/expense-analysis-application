import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    paddingTop: theme.spacing(7),
  },
  section: {
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
  grid: {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
}));

const Category = (props) => {
  const classes = useStyles();
  const {category} = props;
  console.log(category);
  return (
    <div className={classes.root}>
              <Card  elevation={8}>
                <CardContent>
                  <Typography color="textPrimary" gutterBottom variant="h5">
                    Categories
                  </Typography>
                  <Grid  spacing={1}>
                    <Grid item  sm={3}>
                      <Table
                        aria-label="simple table"
                        align="left"
                      >
                        <TableHead>
                          <TableRow>
                          <TableCell align="left">
                              <b>Category ID</b>
                            </TableCell>
                            <TableCell align="left">
                              <b>Category Name</b>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                          <TableBody>
                            {category &&
                              category.map((value) => (
                                <TableRow key={value.categoryid}>
                                  <TableCell align="left" >
                                    {value.categoryid}
                                  </TableCell>
                                  <TableCell align="left" >
                                    {value.categoryname}
                                  </TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                    </Grid>
                  </Grid>
                  <Grid container  spacing={1}>
                    <Grid item sm={3}></Grid>
                    </Grid>
                </CardContent>
              </Card>
    </div>
  );
};


export default Category;
import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: "90%",
    margin: "auto"
  },
  fieldName: {
    width: "90%",
    margin: "4%"
  },
  text: {
    width: "100%",
    marginBottom: "2%"
  }
}));

export default function FirstForm(props) {
  const classes = useStyles();
  return (
    <div>
      <FormGroup row>
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Name"
          onChange={props.handleType("name")}
        />
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Surname"
          onChange={props.handleType("surname")}
        />

        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Email"
          onChange={props.handleType("email")}
        />
      </FormGroup>
    </div>
  );
}

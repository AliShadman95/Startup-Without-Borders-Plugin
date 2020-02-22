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

export default function SecondForm(props) {
  const classes = useStyles();
  return (
    <div>
      <FormGroup row>
        <TextField
          id="standard-multiline-flexible"
          label="What do you do? Tell us about yourself."
          multiline
          rows="6"
          className={classes.text}
          onChange={props.handleType("yourself")}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Why do you want to start a chapter?"
          multiline
          rows="6"
          className={classes.text}
          onChange={props.handleType("why")}
        />
      </FormGroup>
    </div>
  );
}

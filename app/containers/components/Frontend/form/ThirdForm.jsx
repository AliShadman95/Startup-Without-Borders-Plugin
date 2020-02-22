import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
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

export default function ThirdForm(props) {
  const classes = useStyles();
  return (
    <div>
      <FormGroup row>
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="City"
          onChange={props.handleType("city")}
        />
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Country"
          onChange={props.handleType("country")}
        />
        <span className="list-group-item list-group-item-action list-chapters active">
          Region
        </span>
        <Select
          className={classes.fieldName}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={props.handleChange}
        >
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="MENA">MENA</MenuItem>
          <MenuItem value="North America">North America</MenuItem>
          <MenuItem value="LATAM">LATAM</MenuItem>
        </Select>
      </FormGroup>
    </div>
  );
}

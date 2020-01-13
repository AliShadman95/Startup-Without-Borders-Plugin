import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%",
    background: "#343a40",
    borderRadius: "0.15rem",
    color: "#fff"
  },
  labelControl: {
    fontSize: "1.2rem",
    color: "#fff",
    margin: "0 2%"
  },
  optionChapters: {
    color: "#fff"
  }
}));

export default function Chapters({ chapters, handleChapters, idChapters }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel
        className={classes.labelControl}
        id="demo-simple-select-label"
      >
        Chapters
      </InputLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={idChapters}
        onChange={handleChapters}
      >
        <MenuItem value={0}>All Chapters</MenuItem>
        {chapters.map(chapter => {
          return (
            <MenuItem key={chapter.id} value={chapter.id}>
              {chapter.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
import React, { useState, useEffect } from "react";
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

export default function Chapters({ chapters, handleChapters, value }) {
  const classes = useStyles();
  // const [nameChapter, setNameChapter] = useState("");
  // useEffect(() => {
  //   if (value > 0) {
  //     let nm = chapters.find(it => it.id === value);
  //     console.log(nm);

  //     setNameChapter(nm.name);
  //   }
  // }, [value]);
  return (
    <FormControl className={classes.formControl}>
      {/* <InputLabel
        className={classes.labelControl}
        id="demo-simple-select-label"
      >
        Chapters
      </InputLabel> */}

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value === 0 ? "All Chapters" : value}
        onChange={handleChapters}
      >
        <MenuItem value={"All Chapters"}>All Chapters</MenuItem>
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

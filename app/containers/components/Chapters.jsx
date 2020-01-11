import React from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%"
  }
}));

export default function Chapters({ chapters, handleChapters }) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <span className="list-group-item list-group-item-action list-chapters active">
        Chapters
      </span>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={""}
        onChange={handleChapters}
      >
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

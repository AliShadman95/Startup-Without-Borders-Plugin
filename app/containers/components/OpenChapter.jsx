import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: "90%",
    margin: "auto"
  },
  fieldName: {
    width: "42%",
    margin: "4%"
  },
  text: {
    width: "100%",
    marginBottom: "2%"
  }
}));
export default function OpenChapter({ wpUrl, handleCancel }) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    des: ""
  });

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleType = prop => event => {
    setValue({ ...value, [prop]: event.target.value });
  };

  return (
    <div className="col-lg-4 offset-lg-4 py-3 col-s-12 " id="open-chapter">
      <h2 className="text-center">Request Form</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="First Name"
          onChange={handleType("firstName")}
        />
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Last Name"
          onChange={handleType("lastName")}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Age"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            className={classes.fieldName}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Nationality"
          onChange={handleType("nationality")}
        />
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Phone Number"
          onChange={handleType("phone")}
        />
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Email"
          onChange={handleType("email")}
        />

        <TextField
          id="standard-multiline-flexible"
          label="description"
          multiline
          rows="6"
          className={classes.text}
          onChange={handleType("des")}
        />
        <Button variant="contained" className="fill-send" color="primary">
          send {"   "} <SendIcon className="ml-3 " />
        </Button>
      </form>
      <span className="cancel-btn text-primary" onClick={() => handleCancel()}>
        Cancel
      </span>
    </div>
  );
}

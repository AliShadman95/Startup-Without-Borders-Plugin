import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
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
    width: "90%",
    margin: "4%"
  },
  text: {
    width: "100%",
    marginBottom: "2%"
  }
}));
export default function OpenChapter({ handleCancel }) {
  const classes = useStyles();

  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    des: ""
  });

  const [radio, setRadio] = useState("yes");

  const [state, setState] = React.useState({
    Facebook: false,
    LinkedIn: false,
    Instagram: false,
    Twitter: false
  });

  const handleChangeSocial = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleType = prop => event => {
    setValue({ ...value, [prop]: event.target.value });
  };
  const handleChangeRadio = e => {
    setRadio(e.target.value);
  };
  return (
    <div className="col-12 open-chapter">
      <h2 className="text-center">Request Form</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Name"
          onChange={handleType("firstName")}
        />
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Surname"
          onChange={handleType("lastName")}
        />

        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Email"
          onChange={handleType("email")}
        />

        <TextField
          id="standard-multiline-flexible"
          label="What do you do? Tell us about yourself."
          multiline
          rows="6"
          className={classes.text}
          onChange={handleType("des")}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Why do you want to start a chapter?"
          multiline
          rows="6"
          className={classes.text}
          onChange={handleType("des")}
        />
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="City"
          onChange={handleType("lastName")}
        />
        <TextField
          id="standard-basic"
          className={classes.fieldName}
          label="Country"
          onChange={handleType("lastName")}
        />
        <span className="list-group-item list-group-item-action list-chapters active">
          Region
        </span>
        <Select
          className={classes.fieldName}
          labelId="demo-simple-select-label"
          id="demo-simple-select"

          //   onChange={handleChange}
        >
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="MENA">MENA</MenuItem>
          <MenuItem value="North America">North America</MenuItem>
          <MenuItem value="LATAM">LATAM</MenuItem>
        </Select>
        <FormLabel component="legend">
          Have you worked on programs to help entrepreneurs before?
        </FormLabel>
        <RadioGroup
          aria-label="work"
          name="work"
          value={radio}
          onChange={handleChangeRadio}
        >
          <FormControlLabel
            value="yes"
            control={<Radio color="primary" />}
            label="Yes"
            labelPlacement="start"
          />
          <FormControlLabel
            value="no"
            control={<Radio color="primary" />}
            label="No"
            labelPlacement="start"
          />
        </RadioGroup>

        <FormLabel component="legend">
          Social Media channels you're active in
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Facebook}
                onChange={handleChangeSocial("Facebook")}
                value="Facebook"
                color="primary"
              />
            }
            label="Facebook"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.LinkedIn}
                onChange={handleChangeSocial("LinkedIn")}
                value="LinkedIn"
                color="primary"
              />
            }
            label="LinkedIn"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Instagram}
                onChange={handleChangeSocial("Instagram")}
                value="Instagram"
                color="primary"
              />
            }
            label="Instagram"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Twitter}
                onChange={handleChangeSocial("Twitter")}
                value="Twitter "
                color="primary"
              />
            }
            label="Twitter"
          />
        </FormGroup>

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

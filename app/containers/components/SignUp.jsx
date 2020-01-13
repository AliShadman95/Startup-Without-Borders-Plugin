import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import DoneIcon from "@material-ui/icons/Done";
import Button from "@material-ui/core/Button";
var WPAPI = require("wpapi");
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      
    }
  },
  label: {
    textAlign: "center",
    width: "75%"
  },
  full: {
    width: "75%",
    left: "12.5%",
 
  },
  errorField: {
    width: "75%",
    left: "12.5%",
    border: "1px solid #f99999cc"
  },

  check: {
    color: "green"
  },
  colorBackground: {
    background: "#343a40",
    color: "#ffffff",
    width: "75%",
    margin: "2% 0",
    left: "12.5%"
  }
}));
export default function SignUp(props) {
  const classes = useStyles();

  const [values, setValues] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    ConfermPassword: ""
  });
  const [showPass, setShowPass] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const [confPass, setConfPass] = useState(true);
  const [valEmail, setValEmail] = useState(true);

  const [bol, setBol] = useState([false, false, false, false, false, false]);
  useEffect(() => {
    const { wpUrl } = props;
    console.log(wpUrl.api_url);

    wp = new WPAPI({
      endpoint: wpUrl.api_url,
      nonce: wpUrl.api_nonce
    });
    console.log(wp);

    wp.users().get((err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  }, []);
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const checkPassword = () => {
    if (values.password === values.ConfermPassword) {
      setCheckPass(true);
    } else {
      setCheckPass(false);
    }
  };
  const craeteUser = e => {
    e.preventDefault();
    if (!checkPass) {
      setConfPass(false);
    } else {
      setConfPass(true);
    }
    let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      values.email
    );

    setValEmail(checkEmail);

    const { handleChangeCheck } = props;
    let arr = [];
    for (var value in values) {
      arr.push(values[value] === "");
    }

    setBol(arr);

    let booleanValedation = arr.findIndex(value => value === true);

    if (booleanValedation < 0 && checkEmail && checkPass) {
      wp.users()
        .create({
          username: values.username,
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          password: values.ConfermPassword,
          roles: "author"
        })
        .then(function(response) {
          console.log(response);
        });
      setValues({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        ConfermPassword: ""
      });
      handleChangeCheck();
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      id="signup"
    >
      <div
        className="col-lg-4 col-md-6 bg-light my-5 px-5 py-2"
        id="container-form"
      >
        <h2 className="text-center title">Sign Up</h2>
        <form className={classes.root} noValidate autoComplete="on">
          <TextField
            className={!bol[0] ? classes.full : classes.errorField}
            onChange={handleChange("username")}
            label="Username"
          />
          {!bol[0] ? null : (
            <p className="text-danger text-center">This Field is require</p>
          )}
          <TextField
            className={!bol[1] ? classes.full : classes.errorField}
            onChange={handleChange("firstName")}
            label="First Name"
          />
          {!bol[1] ? null : (
            <p className="text-danger text-center">This Field is require</p>
          )}
          <TextField
            className={!bol[2] ? classes.full : classes.errorField}
            label="Last Name"
            onChange={handleChange("lastName")}
          />
          {!bol[2] ? null : (
            <p className="text-danger text-center">This Field is require</p>
          )}
          <TextField
            className={!bol[3] ? classes.full : classes.errorField}
            label="E-Mail"
            onChange={handleChange("email")}
          />
          {!bol[3] ? null : (
            <p className="text-danger text-center">This Field is require</p>
          )}
          {valEmail ? null : (
            <p className="text-danger text-center">This Email isn't valid</p>
          )}
          <InputLabel
            htmlFor="standard-adornment-password"
            className={classes.label}
          >
            Write Your Password
          </InputLabel>
          <Input
            className={!bol[4] ? classes.full : classes.errorField}
            id="standard-adornment-password"
            type={showPass ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {!bol[4] ? null : (
            <p className="text-danger text-center">This Field is require</p>
          )}
          <InputLabel
            htmlFor="standard-adornment-password"
            className={classes.label}
          >
            Conferm Your Password
          </InputLabel>
          <Input
            className={!bol[5] ? classes.full : classes.errorField}
            id="standard-adornment-conferm-password"
            type={showPass ? "text" : "password"}
            value={values.ConfermPassword}
            onChange={handleChange("ConfermPassword")}
            onKeyUp={() => checkPassword()}
            endAdornment={
              <InputAdornment position="end">
                {checkPass ? <DoneIcon className={classes.check} /> : null}
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {!bol[5] && confPass ? null : (
            <p className="text-danger text-center">
              This Field is require and must be the same the password
            </p>
          )}
          <Button
            variant="contained"
            className={classes.colorBackground}
            onClick={e => craeteUser(e)}
          >
            Register
          </Button>
        </form>
        <span
          className="cancel-btn text-primary"
          onClick={() => props.handleChangeCheck()}
        >
          Cancel
        </span>
      </div>
    </div>
  );
}

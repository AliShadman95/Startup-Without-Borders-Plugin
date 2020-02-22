import React, { useState } from "react";
import FirstForm from "./form/FirstForm";
import SecondForm from "./form/SecondForm";
import ThirdForm from "./form/ThirdForm";
import FourthForm from "./form/FourthForm";
import FifthForm from "./form/FifthForm";

import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import BlockIcon from "@material-ui/icons/Block";
import FormGroup from "@material-ui/core/FormGroup";

export default function FormCreateChapter(props) {
  const [value, setValue] = useState({
    name: "",
    surname: "",
    email: "",
    yourself: "",
    why: "",
    nationality: "",
    des: ""
  });

  const [regions, setRegions] = useState("");
  const [state, setState] = React.useState({
    Facebook: false,
    LinkedIn: false,
    Instagram: false,
    Twitter: false
  });
  const [radio, setRadio] = useState("yes");
  const handleType = prop => event => {
    setValue({ ...value, [prop]: event.target.value });
  };
  const handleChange = e => {
    setRegions(e.target.value);
  };

  const handleChangeSocial = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const [pass, setPass] = useState(0);
  const handleChangeRadio = e => {
    setRadio(e.target.value);
  };
  const forms = () => {
    switch (props.count) {
      case 0:
        return <FirstForm handleType={handleType} />;

      case 1:
        return <SecondForm handleType={handleType} />;

      case 2:
        return (
          <ThirdForm handleChange={handleChange} handleType={handleType} />
        );

      case 3:
        return (
          <FourthForm
            handleChangeRadio={handleChangeRadio}
            handleChangeSocial={handleChangeSocial}
            radio={radio}
            state={state}
          />
        );

      case 4:
        return <FifthForm handleType={handleType} />;

      default:
        break;
    }
  };

  const ver = () => {
    if (props.count === 0 && value.name !== "" && value.surname !== "") {
      setPass(0);
    }
  };

  return (
    <div>
      {forms()}
      <FormGroup row>
        {props.count === 0 ? (
          <span className="fill-block">
            <BlockIcon className="text-danger m-2" />
          </span>
        ) : props.count < 4 && props.count > 0 ? (
          <Button
            variant="contained"
            className="fill-prev"
            color="primary"
            onClick={() => props.handleDecreaseCount()}
          >
            <NavigateBeforeIcon className=" " /> {"  "} Previous
          </Button>
        ) : (
          <span
            className="cancel-btn text-primary"
            onClick={() => props.handleHide()}
          >
            Cancel
          </span>
        )}

        {props.count < 4 ? (
          <Button
            variant="contained"
            className="fill-send"
            color="primary"
            onClick={() => props.handleIncreaseCount(pass)}
            onClick={() => ver()}
          >
            Next {"   "} <NavigateNextIcon className="ml-3 " />
          </Button>
        ) : (
          <Button variant="contained" className="fill-send" color="primary">
            SEND {"   "} <SendIcon className="ml-3 " />
          </Button>
        )}
      </FormGroup>
    </div>
  );
}

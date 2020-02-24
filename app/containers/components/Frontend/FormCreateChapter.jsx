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
  const forms = () => {
    switch (props.count) {
      case 0:
        return <FirstForm handleType={props.handleType} />;

      case 1:
        return <SecondForm handleType={props.handleType} />;

      case 2:
        return (
          <ThirdForm
            handleChange={props.handleChange}
            handleType={props.handleType}
          />
        );

      case 3:
        return (
          <FourthForm
            handleChangeRadio={props.handleChangeRadio}
            handleChangeSocial={props.handleChangeSocial}
            radio={props.radio}
            state={props.sociale}
          />
        );

      case 4:
        return <FifthForm />;

      default:
        break;
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
            onClick={() => props.handleIncreaseCount()}
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

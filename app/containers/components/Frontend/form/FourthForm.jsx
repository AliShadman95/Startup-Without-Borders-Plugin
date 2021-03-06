import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

export default function FourthForm(props) {
  return (
    <div>
      <FormGroup row>
        <FormLabel component="legend">
          Have you worked on programs to help entrepreneurs before?
        </FormLabel>
        <RadioGroup
          aria-label="work"
          name="work"
          value={props.radio}
          onChange={e => props.handleChangeRadio(e)}
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

        <FormControlLabel
          control={
            <Checkbox
              checked={props.state.Facebook}
              onChange={e => props.handleChangeSocial("Facebook", e)}
              value="Facebook"
              color="primary"
            />
          }
          label="Facebook"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={props.state.LinkedIn}
              onChange={e => props.handleChangeSocial("LinkedIn", e)}
              value="LinkedIn"
              color="primary"
            />
          }
          label="LinkedIn"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={props.state.Instagram}
              onChange={e => props.handleChangeSocial("Instagram", e)}
              value="Instagram"
              color="primary"
            />
          }
          label="Instagram"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={props.state.Twitter}
              onChange={e => props.handleChangeSocial("Twitter", e)}
              value="Twitter "
              color="primary"
            />
          }
          label="Twitter"
        />
      </FormGroup>
    </div>
  );
}

import React from "react";
import { Form } from 'react-bootstrap';

export class Entry extends React.Component {
  render(){
    return(
      <form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter text"
          />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>

    );
  }
}

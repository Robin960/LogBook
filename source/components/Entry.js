import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import moment from 'moment';
import {DatetimePicker,DatetimePickerTrigger} from 'rc-datetime-picker';

import 'rc-datetime-picker/dist/picker.min.css';

export class Entry extends React.Component {

  constructor(props) {
       super(props);
       this.state = {
         boat:'',
         crew:'',
         destination:'',
         startDate:moment()
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);

       this.handleDate = this.handleDate.bind(this);
   }

   handleChange(event) {
     console.log(event);
     const target = event.target;
     const name = target.name;
      this.setState({
        [name]: event.target.value
      });
   }

   handleDate(startDate){
     this.setState({
       startDate:startDate
     });
    }

    handleSubmit(event) {
      event.preventDefault();
      axios({
        method: 'post',
        url: 'http://localhost:3000/create',
        data: this.state,
        })
        .then(function (response) {
          alert('Your trip Code Is : '+response.data.code);
          window.location.reload();

        })
        .catch(function (response) {
            console.log(response);
      });
    }

  render(){
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="boat">Boat</Label>
          <Input onChange={this.handleChange}  type="text" name="boat" id="boat" value={this.state.boat} required/>
        </FormGroup>
        <FormGroup>
          <Label for="crew">Crew</Label>
          <Input onChange={this.handleChange}  type="text" name="crew" id="crew" value={this.state.crew} required/>
        </FormGroup>
        <FormGroup>
          <Label for="destination">Destination</Label>
          <Input onChange={this.handleChange}  type="text" name="destination" id="destination" value={this.state.destination} required/>
        </FormGroup>
        <FormGroup>
          <Label for="startDate">Start Date</Label>
          <DatetimePickerTrigger
          moment={this.state.startDate}
          onChange={this.handleDate}>
          <Input type="text" name="startDate" value={this.state.startDate.format('YYYY-MM-DD HH:mm')} readOnly />
          </DatetimePickerTrigger>
        </FormGroup>
        <Button color="success" type="submit">Add Trip</Button>
      </Form>
    );
  }
}

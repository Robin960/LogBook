import React from 'react';
import ReactDOM from 'react-dom';
import { HotTable } from '@handsontable/react';
import axios from 'axios';
import { Table,Button } from 'reactstrap';


export class Tabledata extends React.Component {
  constructor(props) {
    super(props);
    var self = this;
    self.state = {};
    self.state.data = [];

    axios.get('http://localhost:3000/list')
    .then(function(response){
      console.log(response);
      self.setState({data: response.data});
    });
  }

  endTrip(id){
    var code = prompt("Please enter your Trip Code");

    if (code != null && code != "") {
      axios({
        method: 'post',
        url: 'http://localhost:3000/endtrip',
        data: {code:code,id:id},
      })
      .then(function (response) {
        if(response.data.err && response.data.msg){
          alert(response.data.msg);
        }else{
          window.location.reload();
        }
      })
    }
  }

  render() {
    return (
      <Table dark>
       <thead>
         <tr>
           <th>BOAT NAME</th>
           <th>CREW NAME</th>
           <th>DESTINATION</th>
           <th>DEPARTURE</th>
           <th>ARRIVAL</th>
         </tr>
       </thead>
       <tbody>
       {this.state.data.map((row, i) => {
          return (<tr>
            <td>{row.Boat}</td>
            <td>{row.Crew}</td>
            <td>{row.Destination}</td>
            <td>{row.Departure}</td>
            <td>{( row.Arrival && row.Arrival != "") ? row.Arrival : <Button color="primary" onClick={()=>this.endTrip(row['_id'])} size="sm">End Trip</Button>}</td>
            </tr>)
       })}
       </tbody>
     </Table>
    );
  }
}

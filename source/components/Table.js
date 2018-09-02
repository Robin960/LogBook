import React from 'react';
import ReactDOM from 'react-dom';
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      ["2016", 10, 11, 12, 13],
      ["2017", 20, 11, 14, 13],
      ["2018", 30, 15, 12, 13]
    ];
  }

  render() {
    return (
      <div id="hot-app">
        <HotTable data={this.data}
        colHeaders={true}
        rowHeaders={true}
        width="600"
        height="300"
        stretchH="all" />
      </div>
    );
  }
}

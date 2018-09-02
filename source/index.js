import React from 'react';
import {render} from 'react-dom';

import {Header} from './components/Header';
import {Table} from './components/Table';
import {Entry} from './components/Entry';


class App extends React.Component {
  render(){
    return(
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                  <Header/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-3">
                  <Entry/>
                  </div>

                  <div className="col-md-9">
                  <Table/>
                  </div>
              </div>

          </div>
    );
  }
}
render(<App/>, window.document.getElementById("app"));

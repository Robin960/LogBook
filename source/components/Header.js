import React from "react";

export class Header extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-default">
          <div className="container">
              <div className="navbar-header">
                <h4>WaterSports LogBook</h4>
              </div>
          </div>
      </nav>
    );
  }
}

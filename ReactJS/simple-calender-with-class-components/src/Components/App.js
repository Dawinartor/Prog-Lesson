import React, { Component } from "react";
import "./App.css";

import Calender from "./Calender/calender";

const style = {
  position: "relative",
  margin: "50px auto"
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calender style={style} width="302px" />
      </div>
    );
  }
}

export default App;

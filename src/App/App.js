import React, { Component } from "react";

import Table from "../Table/data";
import "./bootstrap.min.css";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    );
  }
}

export default App;

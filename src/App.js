import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import OttList from "./components/OttList";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <OttList />
      </React.Fragment>
    );
  }
}

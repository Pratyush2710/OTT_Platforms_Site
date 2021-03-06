import React, { Component } from "react";
import Ott from "../OTT";
import "./ottlist.scss";
import { ottData } from "../../ottData";

export default class OTTList extends Component {
  state = {
    ott: ottData,
  };

  removeOtt = (id) => {
    const { ott } = this.state;
    const sortedOtt = ott.filter((ott) => ott.id !== id);
    this.setState({
      ott: sortedOtt,
    });
    // console.log(id);
  };
  render() {
    // console.log(this.state.ott);
    const { ott } = this.state;
    return (
      <section className="ottlist">
        {ott.map((ott) => (
          <Ott key={ott.id} ott={ott} removeOtt={this.removeOtt} />
        ))}
      </section>
    );
  }
}

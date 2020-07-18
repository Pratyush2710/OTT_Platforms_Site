import React, { Component } from "react";
import "./ott.scss";
export default class Ott extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.ott;
    const { removeOtt } = this.props;
    // console.log(this.props);

    return (
      <article className="ott">
        <div className="img-container">
          <img src={img} alt="ott" />
          <span className="close-btn" onClick={() => removeOtt(id)}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="ott-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

import React, { Component } from "react";
import "./Switch.scss";
class Switch extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSwitch = (e) => {
    this.props?.onSwitch(this.props.name, e.target.checked);
  };

  render() {
    const { isSwitch, classStatusText, setTrue, setFalse } = this.props;
    return (
      <>
        <label className="switch">
          <input onChange={this.handleSwitch} id="status" type="checkbox" />
          <span className="slider round"></span>
          <p className={classStatusText}>{isSwitch ? setTrue : setFalse}</p>
        </label>
      </>
    );
  }
}

export default Switch;

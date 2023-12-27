import React, { Component } from "react";
import "./Checkbox.scss";
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCheckbox = (e) => {
    this.props.onCheckbox(this.props.name, e.target.checked);
  };

  render() {
    const { id, type, label, name } = this.props;
    return (
      <>
        <>
          <input
            name={name}
            onChange={this.handleCheckbox}
            id={id}
            type={type}
          />
          <label htmlFor={id}>{label}</label>
        </>
      </>
    );
  }
}

export default Checkbox;

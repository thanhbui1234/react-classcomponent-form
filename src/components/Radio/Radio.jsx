import React, { Component } from "react";
import "./Radio.scss";
class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleRadio = () => {
    this.props.onRadio(this.props.name, this.props.value);
  };
  render() {
    const { type, id, name, value, label } = this.props;
    return (
      <>
        <input
          onChange={this.handleRadio}
          type={type}
          id={id}
          name={name}
          value={value}
        />
        <label htmlFor={id}>{label}</label>
      </>
    );
  }
}

export default Radio;

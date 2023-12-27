import React, { Component } from "react";
import "./Button.moduel.scss";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    if (this.props.onResest) {
      this.props?.onResest();
    }
    if (this.props.onSubmit) {
      this?.props?.onSubmit();
    }
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick} type={this.props.type}>
          {this.props.children}
        </button>
      </>
    );
  }
}

export default Button;

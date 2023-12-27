import React, { Component } from "react";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (e) => {
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

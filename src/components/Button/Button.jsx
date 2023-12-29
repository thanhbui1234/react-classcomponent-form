import React, { Component } from "react";
import clsx from "clsx";
import style from "./Button.module.scss";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    type: "button",
    variant: "default",
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.clickBtn();
  };
  render() {
    const { variant, type } = this.props;
    const buttonClas = `${style.button}  ${style[variant]}`;
    return (
      <>
        <button className={buttonClas} onClick={this.handleClick} type={type}>
          {this.props.children}
        </button>
      </>
    );
  }
}

export default Button;

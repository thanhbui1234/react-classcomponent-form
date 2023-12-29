import React, { Component } from "react";
import style from "./Switch.module.scss";
import clsx from "clsx";
class Switch extends React.Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    type: "checkbox",
    variant: "default",
  };
  handleSwitch = (e) => {
    this.props?.onSwitch(this.props.name, e.target.checked);
  };

  render() {
    const { type, isSwitch, setTrue, setFalse, variant, isRadioSw } =
      this.props;
    const slide = `${style[variant]}`;
    return (
      <>
        <label className={style.switch}>
          <input onChange={this.handleSwitch} id="status" type={type} />
          <span
            className={
              isRadioSw
                ? clsx(style.round, style.slider, slide)
                : clsx(style.round, style.slider, slide, style.invalid)
            }
          ></span>
          <p className={style.statusText}>{isSwitch ? setTrue : setFalse}</p>
        </label>
      </>
    );
  }
}

export default Switch;

import React, { Component } from "react";
import style from "./Checkbox.module.scss";
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    type: "checkbox",
    variant: "default",
  };

  handleCheckbox = (e) => {
    this.props.onCheckbox(e.target.name, e.target.checked);
  };

  render() {
    const { type, checkboxs, variant, isRemember } = this.props;
    const styleClass = `${style[variant]}`;

    return (
      <div className={style.checkRemember}>
        {checkboxs.map((checkbox, i) => {
          return (
            <div key={i + 1}>
              <input
                className={styleClass}
                name={checkbox}
                onChange={this.handleCheckbox}
                id={checkbox}
                type={type}
              />
              <label
                className={isRemember ? "" : style.invalid}
                htmlFor={checkbox}
              >
                {checkbox}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Checkbox;

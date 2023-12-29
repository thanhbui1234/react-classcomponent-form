import React, { Component } from "react";
import style from "./Radio.module.scss";
class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  static defaultProps = {
    type: "radio",
    variant: "default",
  };
  handleRadio = (e) => {
    this.props.onRadio(e.target.name, e.target.value);
  };
  render() {
    const { type, name, radios, variant } = this.props;
    return (
      <>
        {radios.map((radio, i) => {
          return (
            <div key={i + 1} className={style.container_radio}>
              <input
                className={style[variant]}
                onChange={this.handleRadio}
                type={type}
                id={radio}
                name={name}
                value={radio}
              />
              <label htmlFor={radio}>{radio}</label>
            </div>
          );
        })}
      </>
    );
  }
}

export default Radio;

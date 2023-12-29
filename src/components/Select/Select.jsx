import React, { Component } from "react";
import style from "./Select.module.scss";
import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.myRefSelect = React.createRef();
  }
  static defaultProps = {
    variant: "default",
  };

  handleClickOption = (value) => {
    this?.props?.handleOption(value);
  };

  handleOnpenSelect = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
  handleClickOutside = (event) => {
    if (
      this.myRefSelect &&
      !this.myRefSelect?.current?.contains(event.target)
    ) {
      this.setState({ isOpen: false });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  render() {
    const { type, option, textLabel, options, variant, isOption } = this.props;
    const styleSelect = `${style[variant]}`;

    return (
      <>
        <div
          ref={this.myRefSelect}
          onClick={this.handleOnpenSelect}
          className={
            isOption
              ? clsx(style.dropdown, styleSelect)
              : clsx(style.dropdown, styleSelect, style.invalid)
          }
        >
          <span className={style.dropbtn}>
            <span className="selected-value">
              {option ? option : textLabel}
            </span>
          </span>
          {this.state.isOpen && (
            <div className={style.dropdown_content}>
              <ul
                className={clsx(
                  style.select_dropdown,
                  styleSelect,
                  style.invalid
                )}
                role="listbox"
                id="select-dropdown"
              >
                {options.map((option, i) => {
                  return (
                    <React.Fragment key={i + 1}>
                      <li
                        className={styleSelect}
                        onClick={() => this.handleClickOption(option)}
                        role="option"
                      >
                        <input
                          type="radio"
                          value={option}
                          name="dropdownOption"
                        />
                        <label className={styleSelect} htmlFor="github">
                          <i className="bx bxl-github"></i>
                          {option}
                        </label>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          )}
          <IoIosArrowDown
            className={
              isOption
                ? !this.state.isOpen
                  ? style.icon_select
                  : style.icon_select_active
                : !this.state.isOpen
                ? clsx(style.icon_select, style.invalid)
                : clsx(style.icon_select_active, style.invalid)
            }
          />
        </div>
      </>
    );
  }
}

export default Select;

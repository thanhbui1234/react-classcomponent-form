import React, { Component } from "react";
import "./Select.scss";
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.myRefSelect = React.createRef();
  }
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
    const { option, textLabel, options } = this.props;
    return (
      <>
        <div
          ref={this.myRefSelect}
          onClick={this.handleOnpenSelect}
          className="dropdown"
        >
          <span className="dropbtn">
            <span className="selected-value">
              {option ? option : textLabel}
            </span>
          </span>
          {this.state.isOpen && (
            <div className="dropdown-content">
              <ul
                className="select-dropdown"
                role="listbox"
                id="select-dropdown"
              >
                {options.map((option, i) => {
                  return (
                    <React.Fragment key={i + 1}>
                      <li
                        onClick={() => this.handleClickOption(option)}
                        role="option"
                      >
                        <input
                          type="radio"
                          value={option}
                          name="dropdownOption"
                        />
                        <label htmlFor="github">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={
              !this.state.isOpen ? "icon-select" : "icon-select-active"
            }
          >
            <g clipPath="url(#clip0_291_39)">
              <path
                d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
                fill="#7A5CFA"
              />
            </g>
            <defs>
              <clipPath id="clip0_291_39">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </>
    );
  }
}

export default Select;

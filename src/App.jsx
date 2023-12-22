import React, { Component } from "react";
import "./test.scss";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countPlus: 0,
      countCrea: 0,
    };
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state.countPlus);
  }
  handleInputValue = (e) => {
    this.setState({ countPlus: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <form method="get" action="#" id="form">
          <div className="control">
            <label htmlFor="">Username</label>
            <input
              ref={this.inputRef}
              onChange={this.handleInputValue}
              id="name"
              placeholder="Enter username"
              type="text"
            />
            <span className="" id="errName" htmlFor=""></span>
            <span className="icon-err">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_279_26)">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                    fill="#EB5757"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_279_26">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="control">
            <label htmlFor="">Password</label>
            <input id="password" placeholder="Enter password" type="password" />
            <span className="" id="errPassword" htmlFor=""></span>
            <span className="icon-err-password">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_279_26)">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                    fill="#EB5757"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_279_26">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div>
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <label className="switch">
            <input id="status" type="checkbox" />
            <span className="slider round"></span>
            <p className="statusText"></p>
          </label>
          <div className="container-radio">
            <div>
              <input type="radio" id="html" name="radioName" value="radio1" />
              <label htmlFor="html">Radio section 1</label>
            </div>
            <div>
              <input type="radio" id="css" name="radioName" value="radio2" />
              <label htmlFor="css">Radio section 2</label>
            </div>
            <div>
              <input
                type="radio"
                id="javascript"
                name="radioName"
                value="radio3"
              />
              <label htmlFor="javascript">Radio section 3</label>
            </div>
          </div>

          <div className="dropdown">
            <span className="dropbtn">
              <span className="selected-value">Open this select menu</span>
            </span>
            <div className="dropdown-content">
              <ul
                className="select-dropdown"
                role="listbox"
                id="select-dropdown"
              >
                <li role="option">
                  <input
                    type="radio"
                    id="github"
                    value="option 1"
                    name="dropdownOption"
                  />
                  <label htmlFor="github">
                    <i className="bx bxl-github"></i>Option 1
                  </label>
                </li>
                <li role="option">
                  <input
                    type="radio"
                    id="instagram"
                    value="option 2"
                    name="dropdownOption"
                  />
                  <label htmlFor="instagram">
                    <i className="bx bxl-instagram"></i>Option 2
                  </label>
                </li>
              </ul>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="icon-select"
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
          <div className="custom-select">
            <button
              className="select-button"
              role="combobox"
              aria-labelledby="select button"
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-controls="select-dropdown"
            >
              <span className="arrow"></span>
            </button>
          </div>
          <div className="BTN">
            <button id="cancel" type="button">
              Cancel
            </button>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

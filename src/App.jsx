import React, { Component } from "react";
import "./test.scss";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      remember: false,
      status: false,
      radio: false,
      option: "",
      isName: true,
      isPasword: true,
      values: {},
    };
    this.myRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.state.status == false) {
      this.state.radio = !this.state.radio;
    }
  }

  onHandleValidation = () => {
    if (this.state.name.length < 5) {
      this.setState({ isName: false });
    }
    if (this.state.password.length < 5) {
      this.setState({ isPasword: false });
    }
    this.setState({
      values: Object.fromEntries(Object.entries(this.state).slice(0, 6)),
    });
  };
  handleClickOutside = (event) => {
    if (this.myRef && !this.myRef?.current?.contains(event.target)) {
      this.setState({ isOppen: false });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  render() {
    const handleInput = (tag, e) => {
      const inputValueKey = `${tag}`;
      if (tag == "name") {
        this.setState({ isName: true });
      }
      if (tag == "password") {
        this.setState({ isPasword: true });
      }
      this.setState({ [inputValueKey]: e.target.value });
    };
    const handleChecked = (tag, e) => {
      const inputValueKey = `${tag}`;
      this.setState({ [inputValueKey]: e.target.checked });
    };
    const handleOnpenSelect = () => {
      this.setState((prevState) => ({
        isOppen: !prevState.isOppen,
      }));
    };
    const handleSelect = (value) => {
      this.setState({ option: value });
    };

    return (
      <div className="container">
        <form method="get" action="#" id="form">
          <div className="control">
            <label htmlFor="name">Username</label>
            <input
              className={!this.state.isName ? "invalid" : ""}
              onChange={(e) => handleInput("name", e)}
              id="name"
              placeholder="Enter username"
              type="text"
            />
            {!this.state.isName ? (
              <>
                <span className="" id="errName" htmlFor="">
                  User phai tren 5 ky tu
                </span>
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
              </>
            ) : (
              ""
            )}
          </div>
          <div className="control">
            <label htmlFor="">Password</label>
            <input
              id="password"
              className={!this.state.isPasword ? "invalid" : ""}
              placeholder="Enter password"
              type="password"
              onChange={(e) => handleInput("password", e)}
            />
            {!this.state.isPasword ? (
              <>
                <span className="" id="errName" htmlFor="">
                  Password phai tren 5 ky tu
                </span>
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
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              onChange={(e) => handleChecked("remember", e)}
              id="remember"
              type="checkbox"
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <label className="switch">
            <input
              onChange={(e) => handleChecked("status", e)}
              id="status"
              type="checkbox"
            />
            <span className="slider round"></span>
            <p className="statusText">{this.state.status ? "ON" : "OFF"}</p>
          </label>
          {this.state?.status && (
            <div className="container-radio">
              <div>
                <input
                  onChange={(e) => handleInput("radio", e)}
                  type="radio"
                  id="html"
                  name="radioName"
                  value="radio1"
                />
                <label htmlFor="html">Radio section 1</label>
              </div>
              <div>
                <input
                  onChange={(e) => handleInput("radio", e)}
                  type="radio"
                  id="css"
                  name="radioName"
                  value="radio2"
                />
                <label htmlFor="css">Radio section 2</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="javascript"
                  name="radioName"
                  value="radio3"
                  onChange={(e) => handleInput("radio", e)}
                />
                <label htmlFor="javascript">Radio section 3</label>
              </div>
            </div>
          )}

          <div
            ref={this.myRef}
            onClick={handleOnpenSelect}
            className="dropdown"
          >
            <span className="dropbtn">
              <span className="selected-value">
                {this?.state?.option ? this.state.option : "Chon di"}
              </span>
            </span>
            {this.state.isOppen && (
              <div className="dropdown-content">
                <ul
                  className="select-dropdown"
                  role="listbox"
                  id="select-dropdown"
                >
                  <li onClick={() => handleSelect("option1")} role="option">
                    <input
                      type="radio"
                      id="github"
                      value="option1"
                      name="dropdownOption"
                    />
                    <label htmlFor="github">
                      <i className="bx bxl-github"></i>Option 1
                    </label>
                  </li>
                  <li onClick={() => handleSelect("option2")} role="option">
                    <input
                      type="radio"
                      id="instagram"
                      value="option2"
                      name="dropdownOption"
                    />
                    <label htmlFor="instagram">
                      <i className="bx bxl-instagram"></i>Option 2
                    </label>
                  </li>
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
                !this.state.isOppen ? "icon-select" : "icon-select-active"
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
            <button onClick={this.onHandleValidation} type="button">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

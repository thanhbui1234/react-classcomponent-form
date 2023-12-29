import React, { Componet } from "react";
import "./Input.scss";
class Input extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      value: "",
    };
  }

  static defaultProps = {
    type: "text",
    variant: "default",
    errColor: "default",
  };
  handleInput = (e) => {
    this.props.inputChange(e.target.value, this.props.name);
  };

  render() {
    const {
      isValid,
      classErrr,
      styleErr,
      name,
      label,
      type,
      placeholder,
      minLenght,
    } = this.props;
    return (
      <>
        <div className="control">
          <label htmlFor="">{label}</label>
          <input
            className={isValid ? "" : "invalid"}
            onChange={this.handleInput}
            type={type}
            placeholder={placeholder}
          />
          {!isValid && (
            <>
              <span className="errSpan" id="errSpan" htmlFor="">
                {`${name} phai tren ${minLenght} `}
                {name === "number" ? "" : "ky tu "}
              </span>
              <span className="icon_err">
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
          )}
        </div>
      </>
    );
  }
}
export default Input;

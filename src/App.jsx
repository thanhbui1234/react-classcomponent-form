import React, { Component } from "react";
import "./test.scss";
import Button from "./components/Button";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import Switch from "./components/Switch";
import Radio from "./components/Radio";
import Select from "./components/Select";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      isValid: false,
      password: "",
      number: 0,
      remember: false,
      status: false,
      radio: false,
      option: "",
      isName: true,
      isPasword: true,
      isNumber: true,

      options: ["option 1", "option 2"],
    };
    this.myRef = React.createRef();
  }

  onHandleValidation = (e) => {
    if (this.state.username.length < 5) {
      this.setState({
        isName: false,
      });
    }
    if (this.state.password.length < 5) {
      this.setState({
        isPasword: false,
      });
    }
    if (this.state.number < 1) {
      this.setState({
        isNumber: false,
      });
    }

    console.log(this.state);
  };

  onResestState = () => {
    this.setState({
      username: "",
      password: "",
      number: 0,
      remember: false,
      status: false,
      radio: false,
      option: "",
      isName: true,
      isPasword: true,
      isNumber: true,
    });
  };

  render() {
    const handleInputChange = (value, name) => {
      if (name === "username") {
        this.setState({ isName: true });
      }
      if (name === "password") {
        this.setState({ isPasword: true });
      }
      if (name === "number") {
        this.setState({ isNumber: true });
      }
      this.setState({
        [name]: value,
      });
    };

    const handleChecked = (tag, check) => {
      const inputValueKey = `${tag}`;
      this.setState({ [inputValueKey]: check });
    };

    const handleSelect = (value) => {
      this.setState({ option: value });
    };

    return (
      <div className="container">
        <form
          onSubmit={this.onHandleValidation}
          method="get"
          action=""
          id="form"
        >
          <Input
            isValid={this.state.isName}
            inputChange={handleInputChange}
            styleErr="invalid"
            name="username"
            label="Username"
            type="text"
            placeholder="Enter your username"
            minLenght={5}
          />
          <Input
            isValid={this.state.isPasword}
            inputChange={handleInputChange}
            styleErr="invalid"
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            minLenght={5}
          />
          <Input
            isValid={this.state.isNumber}
            inputChange={handleInputChange}
            styleErr="invalid"
            name="number"
            label="Number"
            type="number"
            placeholder="Enter your number"
            minLenght={5}
          />

          <div>
            <Checkbox
              onCheckbox={handleChecked}
              id="remember"
              type="checkbox"
              label="Remember me"
              name="remember"
            />
          </div>

          <Switch
            isSwitch={this.state.status}
            onSwitch={handleChecked}
            classStatusText="statusText"
            setTrue="ON"
            setFalse="OFF"
            name="status"
          />

          {this.state?.status && (
            <div className="container-radio">
              <div>
                <Radio
                  onRadio={handleChecked}
                  type="radio"
                  id="radio1"
                  name="radio"
                  value="radio1"
                  label="Radio section 1"
                />
              </div>
              <div>
                <Radio
                  onRadio={handleChecked}
                  type="radio"
                  id="radio2"
                  name="radio"
                  value="radio2"
                  label="Radio section 2"
                />
              </div>
              <div>
                <Radio
                  onRadio={handleChecked}
                  type="radio"
                  id="radio3"
                  name="radio"
                  value="radio3"
                  label="Radio section 3"
                />
              </div>
            </div>
          )}

          <Select
            option={this.state.option}
            textLabel="chondi"
            options={this.state.options}
            handleOption={handleSelect}
          />

          <div className="BTN">
            <Button onResest={this.onResestState} type={"button"}>
              Cancel
            </Button>
            <Button onSubmit={this.onHandleValidation} type="button">
              Next
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

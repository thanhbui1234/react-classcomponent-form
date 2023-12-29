import React, { Component } from "react";
import "./main.scss";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Checkbox from "./components/Checkbox/Checkbox";
import Switch from "./components/Switch/Switch";
import Radio from "./components/Radio/Radio";
import Select from "./components/Select/Select";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      isValid: false,
      password: "",
      number: 0,
      remember: [],
      isRemember: true,
      status: false,
      radio: false,
      option: "",
      isName: true,
      isPasword: true,
      isNumber: true,
      isSelected: true,
      isRadioSw: true,
      checkBoxs: ["Remember 1", "Remember 2", "Remember 3 "],
      options: [
        "option 1",
        "option 2",
        "option 3",
        "option 4",
        "option 5",
        "option 6",
        "option 7",
      ],
      radios: ["Radio1", "Radio2", "Radio3", "Radio4"],
    };
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

    if (!this.state.option) {
      this.setState({
        isSelected: false,
      });
    }
    if (!this.state.radio) {
      this.setState({
        isRadioSw: false,
      });
    }

    if (this.state.remember.length === 0) {
      this.setState({
        isRemember: false,
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
      isSelected: true,
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
      console.log(inputValueKey);
      this.setState({ [inputValueKey]: check });
    };

    const handleCheckbox = (tag, check) => {
      this.setState({ isRemember: true });
      const newArr = [...this.state.remember, tag];
      this.setState({ remember: newArr });
    };

    const handleCheckedRadio = (tag, check) => {
      const inputValueKey = `${tag}`;
      this.setState({ [inputValueKey]: check });
      this.setState({ isRadioSw: true });
    };

    const handleSelect = (value) => {
      this.setState({ option: value });
      this.setState({ isSelected: true });
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
            name="username"
            label="Username"
            placeholder="Enter your username"
            minLenght={5}
            variant="dark"
          />
          <Input
            isValid={this.state.isPasword}
            inputChange={handleInputChange}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            minLenght={5}
          />
          {/* <Input
            isValid={this.state.isNumber}
            inputChange={handleInputChange}
            name="number"
            label="Number"
            type="number"
            placeholder="Enter your number"
            minLenght={5}
          /> */}
          <Input
            isValid={this.state.isNumber}
            inputChange={handleInputChange}
            name="number"
            label="Number"
            type="number"
            placeholder="Enter your password"
            minLenght={5}
          />

          <Checkbox
            onCheckbox={handleCheckbox}
            checkboxs={this.state.checkBoxs}
            isRemember={this.state.isRemember}
            variant="default"
          />

          <Switch
            isSwitch={this.state.status}
            onSwitch={handleChecked}
            setTrue="ON"
            setFalse="OFF"
            name="status"
            isRadioSw={this.state.isRadioSw}
          />

          {this.state?.status && (
            <div>
              <Radio
                onRadio={handleCheckedRadio}
                name="radio"
                radios={this.state.radios}
              />
            </div>
          )}

          <Select
            option={this.state.option}
            textLabel="chon bừa đi"
            options={this.state.options}
            handleOption={handleSelect}
            isOption={this.state.isSelected}
          />

          <div className="BTN">
            <Button clickBtn={this.onResestState}>Cancel</Button>
            <Button type="submit" clickBtn={this.onHandleValidation}>
              Next
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

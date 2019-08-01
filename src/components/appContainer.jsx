import React from "react";
import WeightInput from "./input/weightInput";
import OutPutContainer from "./weightDisplay/outPutContainer";

class AppContainer extends React.Component {
  state = {
    workSetWeight: 0,
  };

  render() {
    return (
      <>
        <header className="App-header">
          Barbell Calculator
        </header>
        <WeightInput
          value={this.state.workSetWeight}
          handleOnChange={this.onWorkSetInputValueChange}
        />
        <OutPutContainer workSetWeight={this.state.workSetWeight}/>
      </>
    )
  }

  onWorkSetInputValueChange = (e) => {
    const value = parseInt(e.currentTarget.value);
    this.setState({ workSetWeight: value});
  }
}

export default AppContainer;

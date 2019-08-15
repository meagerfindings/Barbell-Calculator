import React from "react";
import WeightInput from "./input/weightInput";
import OutPutContainer from "./weightDisplay/outPutContainer";

class AppContainer extends React.Component {
  state = {
    workSetWeight: 0,
    availablePlates: {
      barWeight: 45,
      lbs: {
        55: { weight: 55, available: 0 },
        45: { weight: 45, available: 8 },
        35: { weight: 35, available: 0 },
        25: { weight: 25, available: 4 },
        10: { weight: 10, available: 4 },
        5: { weight: 5, available: 4 },
        2.5: { weight: 2.5, available: 4 },
        1.25: { weight: 1.25, available: 0 },
        1: { weight: 1, available: 2 },
        0.75: { weight: 0.75, available: 2 },
        0.5: { weight: 0.5, available: 2 },
        0.25: { weight: 0.25, available: 2 },
      },
    },
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

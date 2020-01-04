import React from "react";
import { func, number } from "prop-types";

class WeightInput extends React.Component {
  static propTypes = {
    value: number.isRequired,
    handleOnChange: func.isRequired,
  };

  render() {
    return (
      <form className="weight-input-container">
        <label className="weight-input-label">
          <h3>Workset Weight</h3>
          <input
            name="weight"
            className="weight-input-value"
            type="number"
            value={this.props.value}
            onChange={this.props.handleOnChange} />
        </label>
      </form>
    )
  }
}

export default WeightInput;

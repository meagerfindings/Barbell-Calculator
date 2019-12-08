import _ from "lodash";
import React from "react";
import { number } from "prop-types";
import largestPlate from "../helpers/largestPlate";
import availablePounds from "../helpers/availablePounds";

class OutPutContainer extends React.Component {
  static propTypes = {
    workSetWeight: number,
  };

  static defaultProps = {
    workSetWeight: 0,
  };

  render() {
    return (
      <div className="output">
        WorkSet Weight:
        {this.renderWorkSetWeight()}
      </div>
    )
  }

  renderWorkSetWeight = () => {
    if (_.isNaN(this.props.workSetWeight)) return null;
    if (this.props.workSetWeight < 45 ) return null;

    return largestPlate(this.availablePoundPlates(), this.weightForSleeves());
  };

  availablePoundPlates = () => {
    const { availablePlates } = this.props;
    return availablePounds(availablePlates.lbs);
  };

  weightWithoutBar = () => {
    return this.props.workSetWeight - this.props.availablePlates.barWeight;
  };

  weightForSleeves = () => {
    const platesWeight = this.weightWithoutBar();
    if ( platesWeight === 0) {
      return 0;
    }

    return platesWeight / 2;
  }
}

export default OutPutContainer;

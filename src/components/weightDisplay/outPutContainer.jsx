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

    const  weightWithoutBar = this.props.workSetWeight - this.props.availablePlates.barWeight;

    //TODO: need to devide weight without bar by 2 to get our final amount

    return largestPlate(this.availablePoundPlates(), weightWithoutBar);
  };

  availablePoundPlates = () => {
    const { availablePlates } = this.props;
    return availablePounds(availablePlates.lbs);
  };
}

export default OutPutContainer;

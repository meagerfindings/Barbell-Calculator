import _ from "lodash";
import React from "react";
import { number } from "prop-types";
import largestPlate from "../helpers/largestPlate";

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

    // largestPlate(this.props.availablePlates.lbs, weightWithoutBar);

    // return this.props.workSetWeight;
  }

  availableLbs = () => {
    const  plates = []
    //TODO: Make into helper with specs
    // for each entry within Lbs, add weight to plates as many times as it's available
  };
}

export default OutPutContainer;

import _ from "lodash";
import React from "react";
import { number } from "prop-types";
import { sleevePlates } from "../helpers/sleevePlates";

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
        Plates Needed:
        {this.renderWorkSetWeight()}
      </div>
    )
  }

  renderWorkSetWeight = () => {
    const { workSetWeight, availablePlates } = this.props;
    if (_.isNaN(workSetWeight)) return null;
    if (workSetWeight < availablePlates.barWeight ) return null;

    return sleevePlates(workSetWeight, availablePlates);
  };
}

export default OutPutContainer;

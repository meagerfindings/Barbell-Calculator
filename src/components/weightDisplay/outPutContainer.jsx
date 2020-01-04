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
    if (_.isNaN(this.props.workSetWeight)) return null;
    if (this.props.workSetWeight < 45 ) return null;

    return sleevePlates(this.props.workSetWeight, this.props.availablePlates);
  };
}

export default OutPutContainer;

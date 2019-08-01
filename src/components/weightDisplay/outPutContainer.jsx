import _ from "lodash";
import React from "react";
import { number } from "prop-types";

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

   return this.props.workSetWeight;
  }
}

export default OutPutContainer;

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
    const plates =this.platesNeeded();
    return (
      <div className="output">
        Plates Needed:
        {this.renderPlates(plates)}
      </div>
    )
  }

  platesNeeded = () => {
    const { workSetWeight, availablePlates } = this.props;
    if (_.isNaN(workSetWeight)) return null;
    if (workSetWeight < availablePlates.barWeight ) return null;

    return sleevePlates(workSetWeight, availablePlates);
  };

  renderPlates = plates => {
    if (_.isNull(plates)) return null;

    const listItems = plates.map((plate, index) =>
      <li key={index}>{plate}</li>
    );

    return <ul className="plates-needed">{listItems}</ul>
  };
}

export default OutPutContainer;

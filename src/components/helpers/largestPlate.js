import _ from "lodash";
import {removeItemFromArray} from "./removeItemFromArray";

function largestPlate(availablePlates, total) {
  let tempPlates = Array.from(availablePlates);
  let biggestPlate = _.max(tempPlates);

  do {
    biggestPlate = _.max(tempPlates);

    if (biggestPlate <= total) {
      return biggestPlate;
    }

    tempPlates = removeItemFromArray(tempPlates, biggestPlate)
  } while (tempPlates.length > 0);


  return biggestPlate <= total ? biggestPlate : 0;
}

export default largestPlate;

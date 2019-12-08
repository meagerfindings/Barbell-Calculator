import _ from "lodash";

function largestPlate(availablePlates, total) {
  let tempPlates = Array.from(availablePlates);
  let biggestPlate = _.max(tempPlates);

  do {
    biggestPlate = _.max(tempPlates);
    const index = _.indexOf(tempPlates, biggestPlate);

    if (biggestPlate <= total) {
      return biggestPlate;
    }

    tempPlates.splice(index, 1);
  } while  (tempPlates.length > 0);


  return biggestPlate <= total ? biggestPlate : 0;
}

export default largestPlate;

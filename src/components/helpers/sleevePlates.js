import weightForSleeves from "./weightForSleeves";
import availablePoundsPerSleeve from "./availablePoundsPerSleeve";
import largestPlate from "./largestPlate";
import {removeItemFromArray} from "./removeItemFromArray";

const weightWithoutBar = (workSetWeight, barWeight) => {
  return workSetWeight - barWeight;
};

export function sleevePlates(workSetWeight, plates) {
  let tempPlates = [];
  let tempWeight = weightForSleeves(weightWithoutBar(workSetWeight, plates.barWeight));
  let availablePlates = Array.from(availablePoundsPerSleeve(plates.lbs));

  do {
    const heaviestPlate = largestPlate(availablePlates, tempWeight);

    if (heaviestPlate > 0) {
      tempPlates.push(heaviestPlate);
    }

    removeItemFromArray(availablePlates, heaviestPlate);

    tempWeight = tempWeight - heaviestPlate;

  } while (largestPlate(availablePlates, tempWeight) !== 0);

  return tempPlates
}

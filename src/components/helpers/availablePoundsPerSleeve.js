function isOdd(number) {
  return number % 2;
}

function evenAmountOfPlates(plates) {
  // This ensures that we don't use a plate on one side and then not have a plate for the other side of the barbell
  if (isOdd(plates)) return plates - 1;

  // TODO: Upgrade plate math to do one side of the barbell, then the next. This would allow us to use odd numbers
  //  of plates. Example: We could use an extra 10 on the left side, and compensate with 2 5's on the right.
  //  This seems complicated currently as we would have to know we have the 2 extra 5's to allow this to happen.

  return plates;
}

function sleevePlates(plates) {
  // divide the plates by 2 since we are calculating the available plates for one side of the barbell
  return evenAmountOfPlates(plates) / 2;
}

function availablePoundsPerSleeve(availablePlates) {
  let plates = [];

  for (let key in availablePlates) {
    if (availablePlates.hasOwnProperty(key)) {
      let value = availablePlates[key];

      const amountAvailable = sleevePlates(value.available);

      for (let i=0; i < amountAvailable; i++) {
        plates.push(value.weight)
      }
    }
  }
  return plates;
}

export default availablePoundsPerSleeve;

function availablePounds(availablePlates) {
  let plates = [];

  for (let key in availablePlates) {
    if (availablePlates.hasOwnProperty(key)) {
      let value = availablePlates[key];

      for (let i=0; i < value.available; i++) {
        plates.push(value.weight)
      }
    }
  }
  return plates;
}

export default availablePounds;

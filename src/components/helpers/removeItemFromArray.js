import _ from "lodash";

export function removeItemFromArray(array, item) {
  const index = _.indexOf(array, item);

  if (index === -1) return array;

  array.splice(index, 1);

  return array;
}

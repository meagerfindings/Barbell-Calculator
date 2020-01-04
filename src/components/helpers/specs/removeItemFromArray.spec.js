import {removeItemFromArray} from "../removeItemFromArray";

describe("removeItemFromArray", () => {
  const testArray = ["one", "two"];
  describe("with item in array", () => {
    test("returns array without item", () => {
      expect(removeItemFromArray(testArray, "two")).toEqual([testArray[0]]);
    });
  });

  describe("with item NOT in array", () => {
    test("returns original array", () => {
      expect(removeItemFromArray(testArray, "doesn't exist")).toEqual(testArray);
    });
  });
});

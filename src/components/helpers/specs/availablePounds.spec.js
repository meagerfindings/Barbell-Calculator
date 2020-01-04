import availablePoundsPerSleeve from "../availablePoundsPerSleeve";

describe("availablePoundsPerSleeve", () => {
  describe("without any plate data", () => {
    test("returns empty array", () => {
      const plates = {};
      expect(availablePoundsPerSleeve(plates)).toEqual([]);
    });
  });

  describe("with no available plates", () => {
    test("returns empty array", () => {
      const plates = {45: {weight: 45, available: 0}};

      expect(availablePoundsPerSleeve(plates)).toEqual([]);
    });
  });

  test("returns array with 2 45s if there are 4 available 45s", () => {
    const plates = {45: {weight: 45, available: 4}};

    expect(availablePoundsPerSleeve(plates)).toEqual([45, 45]);
  });

  describe("with multiple plate weights", () => {
    test("returns half of available weights without unavailable weights", () => {
      const plates = {
        45: {weight: 45, available: 4},
        35: {weight: 35, available: 0},
        25: {weight: 25, available: 2},
        10: {weight: 10, available: 2},
      };

      const expectedResult = [45, 45, 25, 10 ];
      const testResult = availablePoundsPerSleeve(plates).sort();

      // Order is not guaranteed and does not matter,
      // so we sort the results here to check equality.
      expect(testResult.sort()).toEqual(expectedResult.sort());
    });

    test("returns half of only the even number of available plates", () => {
      //this ensures that we don't use a plate on one side and then not have a plate for the other side of the barbell
      const plates = {
        45: {weight: 45, available: 3},
        25: {weight: 25, available: 1},
        10: {weight: 10, available: 2},
      };

      const expectedResult = [45, 10];
      const testResult = availablePoundsPerSleeve(plates).sort();

      // Order is not guaranteed and does not matter,
      // so we sort the results here to check equality.
      expect(testResult.sort()).toEqual(expectedResult.sort());
    });
  });
});


import availablePounds from "../availablePounds";

describe("availablePounds", () => {
  describe("without any plate data", () => {
    test("returns empty array", () => {
      const plates = {};
      expect(availablePounds(plates)).toEqual([]);
    });
  });

  describe("with no available plates", () => {
    test("returns empty array", () => {
      const plates = {45: {weight: 45, available: 0}};

      expect(availablePounds(plates)).toEqual([]);
    });
  });

  test("returns array with 2 45s if there are 2 available 45s", () => {
    const plates = {45: {weight: 45, available: 2}};

    expect(availablePounds(plates)).toEqual([45, 45]);
  });

  describe("with multiple plate weights", () => {
    test("returns all available weights without unavailable weights", () => {
      const plates = {
        45: {weight: 45, available: 3},
        35: {weight: 35, available: 0},
        25: {weight: 25, available: 1},
        10: {weight: 10, available: 2},
      };

      const expectedResult = [45, 45, 45, 25, 10, 10];
      const testResult = availablePounds(plates).sort();

      // Order is not guaranteed and does not matter,
      // so we sort the results here to check equality.
      expect(testResult.sort()).toEqual(expectedResult.sort());
    })
  })
});


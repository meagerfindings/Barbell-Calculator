import largestPlate from "../largestPlate";

describe("largestPlate", () => {
  const basePlates = [25, 10, 5, 2.5, 45];

  test("returns 0 if total is zero", () => {
    expect(largestPlate(basePlates, 0)).toEqual(0);
  });

  test("returns 0 if no plate is smaller than total", () => {
    expect(largestPlate(basePlates, 1.5)).toEqual(0);
  });

  test("returns largest plate, if smaller than or equal to total", () => {
    expect(largestPlate(basePlates, 2.5)).toEqual(2.5);
    expect(largestPlate(basePlates, 17.5)).toEqual(10);
    expect(largestPlate(basePlates, 40)).toEqual(25);
    expect(largestPlate(basePlates, 50)).toEqual(45);
  });

  describe("order of plates does not affect result", () => {
    const ascendingPlates = [ 2.5, 5, 10, 25, 45];
    const descendingPlates = [ 45, 25, 10, 5, 2.5];

    test("ascending plate order returns expected result", () => {
      expect(largestPlate(ascendingPlates, 100)).toEqual(45);
    });

    test("descending plate order returns expected result", () => {
      expect(largestPlate(descendingPlates, 100)).toEqual(45);
    });

    test("mixed plate order returns expected result", () => {
      expect(largestPlate(basePlates, 100)).toEqual(45);
    });
  });

});


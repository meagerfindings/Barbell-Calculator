import weightForSleeves from "../weightForSleeves";

describe("weightForSleeves", () => {
  describe("when weight is 0", () => {
    test("returns 0", () => {
      expect(weightForSleeves(0)).toEqual(0);
    });
  });

  describe("when weight is greater than 0", () => {
    test("returns half of weight", () => {
      expect(weightForSleeves(100)).toEqual(50);
      expect(weightForSleeves(1)).toEqual(0.5);
      expect(weightForSleeves(7.5)).toEqual(3.75);
    });
  });
});

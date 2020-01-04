import { sleevePlates } from "../sleevePlates";

describe("sleevePlates", () => {
  describe("with enough available plates", () => {
    const availablePlates = {
      barWeight: 45,
      lbs: {
        45: {weight: 45, available: 8},
        25: {weight: 25, available: 4},
        10: {weight: 10, available: 4},
        5: {weight: 5, available: 4},
        2.5: {weight: 2.5, available: 4},
        1: {weight: 1, available: 2},
        0.75: {weight: 0.75, available: 2},
        0.5: {weight: 0.5, available: 2},
        0.25: {weight: 0.25, available: 2},
      },
    };

    describe("with workset weight of 225 and bar weight of 45", () => {
      test("returns array of two 45's", () => {
        expect(sleevePlates(225, availablePlates)).toEqual([45, 45])
      });
    });

    describe("when workset weight is below bar weight", () => {
      test("returns empty array", () => {
        expect(sleevePlates(0, availablePlates)).toEqual([])
      });
    });

    describe("with non whole number workset weight", () => {
      test("returns fractional fractional plate amounts", () => {
        expect(sleevePlates(47.5, availablePlates)).toEqual([1, 0.25])
      });
    });
  });

  describe("without enough available plates", () => {
    describe("without enough plates to reach workset weight", () => {
      const notEnoughPlates = {
        barWeight: 45,
        lbs: {
          45: {weight: 45, available: 3},
          25: {weight: 25, available: 3},
        },
      };
      test("returns as many balanced available plates as possible", () => {
        expect(sleevePlates(9999, notEnoughPlates)).toEqual([45, 25]);
      });
    });
  });

  describe("without any available plates", () => {
    const emptyPlates = {
      barWeight: 45,
      lbs: {}
    };

    test("returns empty array", () => {
      expect(sleevePlates(200, emptyPlates)).toEqual([]);
    });
  });
});

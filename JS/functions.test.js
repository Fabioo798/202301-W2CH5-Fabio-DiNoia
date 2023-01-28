import { createMatrix } from "./functions";
import { arr, row, SquareCells } from "./matris";

describe("given an array, a class and a variable", () => {
  describe("When createMatrix is called", () => {
    test("Fill the matrix with only class elements", () => {
      const r = createMatrix(arr, row, SquareCells);
      expect(r).toEqual([
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}],
      ]);
    });
  });
});

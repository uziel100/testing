const { multiply, divide, sum } = require("./02-math");

describe("Test file 02.math.hs", () => {
  describe("Tests for sum", () => {
    test("adds 1 + 2 to equal 3", () => {
      expect(sum(1, 2)).toBe(3);
    });
  });

  describe("Tests for multiply", () => {
    test("should multiply 2 * 5 equal 10", () => {
      const result = multiply(2, 5);

      expect(result).toBe(10);
    });
  });

  describe("Tests for divide", () => {
    test("should divide 10 / 2 equal 5", () => {
      const result = divide(10, 2);
      expect(result).toBe(5);
    });

    test("should divide for zero", () => {
      const result = divide(10, 0);
      expect(result).toBeNull();
    });
  });
});

import { assert, describe, expect, test } from "vitest";
import { BinarySum } from "../CodeWars-Challenges/BinarySum";

describe("BinarySum(1, 2)", () => {
  let testResult1 = BinarySum(1, 2);

  test("should return something that isn't falsy", () => {
    expect(testResult1).toBeTruthy();
  });

  test('should retuen "11" for 1 + 2', () => {
    assert(testResult1, "11");
  });

  test('should return "111111" for 51 + 12', () => {
    let testResult2 = BinarySum(51, 12);

    assert(testResult2, "111111");
  });

  test('should return "1100100" for 100 + 0', () => {
    let testResult3 = BinarySum(100, 0);

    assert(testResult3, "1100100");
  });

  test("should work with any 2 random numbers", () => {
    let top = Math.pow(10, 15),
      a,
      b,
      actual,
      expected;
    for (let i = 0; i < 50; i++) {
      a = Math.floor(Math.random() * top);
      b = Math.floor(Math.random() * top);
      expected = (a + b).toString(2);
      actual = BinarySum(a, b);

      assert.equal(expected, actual);
    }
  });
});

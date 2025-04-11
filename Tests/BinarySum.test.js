import { describe, expect, test } from "vitest";
import { BinarySum } from "../CodeWars-Challenges/BinarySum";

describe("BinarySum", () => {
  let testResult1 = BinarySum(1, 2);

  // Expect it to be truthy?
  // Expect it to be '11' when 1 & 2 are passed
  // Test 53
  // Test 100
  // Test random numbers

  test("expects to pass in two numbers and return the sum", () => {
    expect(BinarySum(1, 2)).toBe(3);
  });
});

/**
 * Adds two numbers and returns their sum as a binary string.
 *
 * You may perform the binary conversion before or after addition.
 *
 * Examples:
 *   addBinary(1, 1) ➞ "10"   // 1 + 1 = 2 → "10"
 *   addBinary(5, 9) ➞ "1110" // 5 + 9 = 14 → "1110"
 *
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {string} - Sum in binary format
 */
export function BinarySum(a, b) {
  return (a + b).toString(2);
}

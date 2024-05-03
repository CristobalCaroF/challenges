import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

// --------------ADD FUNCTION----------------

test("returns 5 if called add(2, 3)", () => {
  const result = add(2, 3);

  expect(result).toBe(5);
});

test("returns negative if called add(2, -3)", () => {
  const result = add(2, -3);

  expect(result).toBeLessThan(0);
});

test("returns close to 0.3 if called add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);

  expect(result).toBeCloseTo(0.3);
});

// --------------SUBTRACT FUNCTION----------------

test("returns 10 if called subtract(15, 5)", () => {
  const result = subtract(15, 5);

  expect(result).toBe(10);
});

test("returns negative if called subtract(5, 15)", () => {
  const result = subtract(5, 15);

  expect(result).toBeLessThan(0);
});

// --------------MULTIPLY FUNCTION----------------

test("returns 8 if called multiply(2, 4)", () => {
  const result = multiply(2, 4);

  expect(result).toBe(8);
});

test("returns negative if called multiply(-2, 4)", () => {
  const result = multiply(-2, 4);

  expect(result).toBeLessThan(0);
});

test("returns negative if called multiply(2, -4)", () => {
  const result = multiply(2, -4);

  expect(result).toBeLessThan(0);
});

test("returns positive if called multiply(-2, -4)", () => {
  const result = multiply(-2, -4);

  expect(result).toBeGreaterThan(0);
});

// --------------DIVIDE FUNCTION----------------

test("returns 3 if called divide(9, 3)", () => {
  const result = divide(9, 3);

  expect(result).toBe(3);
});

test('returns "You should not do this!" if called divide(9, 0)', () => {
  const result = divide(9, 0);

  expect(result).toBe("You should not do this!");
});

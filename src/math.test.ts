import { describe, expect, it } from "vitest";
import { add, clamp, mul, sub } from "./math";

describe("add", () => {
  it("adds positive numbers", () => expect(add(2, 3)).toBe(5));
  it("adds a negative number", () => expect(add(-2, 3)).toBe(1));
});

describe("sub", () => {
  it("subtracts right from left", () => expect(sub(5, 2)).toBe(3));
  it("subtracts equal numbers", () => expect(sub(3, 3)).toBe(0));
});

describe("mul", () => {
  it("multiplies positive numbers", () => expect(mul(3, 4)).toBe(12));
  it("multiplies by zero", () => expect(mul(9, 0)).toBe(0));
  it("multiplies negative numbers", () => expect(mul(-2, -3)).toBe(6));
});

describe("clamp", () => {
  it("keeps an in-range value", () => expect(clamp(5, 0, 10)).toBe(5));
  it("uses the lower boundary", () => expect(clamp(-1, 0, 10)).toBe(0));
  it("uses the upper boundary", () => expect(clamp(11, 0, 10)).toBe(10));
});

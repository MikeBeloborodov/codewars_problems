import { bouncingBall } from "./bouncing_balls";

describe("test cases", () => {
  it("should return 3", () => expect(bouncingBall(3, 0.66, 1.5)).toBe(3));
  it("should return 15", () => expect(bouncingBall(30, 0.66, 1.5)).toBe(15));
  it("should return -1", () => expect(bouncingBall(3, 1, 1.5)).toBe(-1));
});

import { grader } from "./grader";

describe("test cases", () => {
  it("should return 'A' ", () => expect(grader(0.9)).toBe("A"));
  it("should return 'D'", () => expect(grader(0.6)).toBe("D"));
  it("should return 'B'", () => expect(grader(0.8)).toBe("B"));
  it("should return 'C'", () => expect(grader(0.7)).toBe("C"));
  it("should return 'F'", () => expect(grader(0.1)).toBe("F"));
});

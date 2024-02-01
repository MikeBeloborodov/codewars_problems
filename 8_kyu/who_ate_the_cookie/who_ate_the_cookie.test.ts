import { cookie } from "./who_ate_the_cookie";

describe("test cases", () => {
  it("should return Zach", () =>
    expect(cookie("test")).toBe("Who ate the last cookie? It was Zach!"));
  it("should return Monica", () =>
    expect(cookie(25)).toBe("Who ate the last cookie? It was Monica!"));
  it("should return the dog", () =>
    expect(cookie(true)).toBe("Who ate the last cookie? It was the dog!"));
});

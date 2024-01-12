import { incrementString } from "./string_incrementer";

describe("string incrementer tests", () => {
  it("should return foo1", () => expect(incrementString("foo")).toBe("foo1"));
  it("should return foo2", () => expect(incrementString("foo1")).toBe("foo2"));
  it("should return foo1", () => expect(incrementString("foo0")).toBe("foo1"));
  it("should return foo9", () => expect(incrementString("foo8")).toBe("foo9"));
  it("should return foo10", () =>
    expect(incrementString("foo9")).toBe("foo10"));
  it("should return foo11", () =>
    expect(incrementString("foo10")).toBe("foo11"));
  it("should return foo20", () =>
    expect(incrementString("foo19")).toBe("foo20"));
  it("should return foo9bar00100", () =>
    expect(incrementString("foo9bar00099")).toBe("foo9bar00100"));
});

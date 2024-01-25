import { sayHello } from "./welcome_to_the_city";

describe("test cases", () => {
  it("should return Hello, John Smith! Welcome to Phoenix, Arizona!", () =>
    expect(sayHello(["John", "Smith"], "Phoenix", "Arizona")).toBe(
      "Hello, John Smith! Welcome to Phoenix, Arizona!",
    ));
});

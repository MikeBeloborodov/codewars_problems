import { Cat } from "./classy_extentions";

describe("test cases", () => {
  it("should return Lamp meows.", () =>
    expect(new Cat("Lamp").speak()).toBe("Lamp meows."));
});

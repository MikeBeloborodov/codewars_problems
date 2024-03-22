import { updateLight } from "./traffic_light";

describe("test cases", () => {
  it("should return yellow", () => expect(updateLight("green")).toBe("yellow"));
  it("should return red", () => expect(updateLight("yellow")).toBe("red"));
  it("should return green", () => expect(updateLight("red")).toBe("green"));
});

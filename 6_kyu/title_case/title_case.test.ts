import { titleCase } from "./title_case";

describe("test cases", () => {
  it("should return Fox Hound", () =>
    expect(titleCase("foX hoUnD")).toBe("Fox Hound"));
  it("should return The Wind in the Willows", () =>
    expect(titleCase("THE WIND IN THE WILLOWS", "The In")).toBe(
      "The Wind in the Willows",
    ));
});

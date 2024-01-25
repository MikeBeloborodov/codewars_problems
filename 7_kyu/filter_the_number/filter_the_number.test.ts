import { filterString } from "./filter_the_number";

describe("test cases", () => {
  it("should return 123", () => expect(filterString("123")).toBe(123));
  it("should return 123", () =>
    expect(filterString("asd1asdasd2ddsdadd3")).toBe(123));
  it("should return 123", () => expect(filterString("12dasdasdas3")).toBe(123));
});

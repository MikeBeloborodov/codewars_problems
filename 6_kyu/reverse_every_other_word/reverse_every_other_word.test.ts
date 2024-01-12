import { reverse } from "./reverse_every_other_word";

test("test case 1", () => {
  expect(reverse("Reverse this string, please!")).toBe(
    "Reverse siht string, !esaelp",
  );
});

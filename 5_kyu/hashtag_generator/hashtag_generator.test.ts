import { generateHashtag } from "./hashtag_generator";

test("test case 1", () => {
  expect(generateHashtag("    Hello     World   ")).toBe("#HelloWorld");
});

test("test case 2", () => {
  expect(generateHashtag("")).toBe(false);
});

test("test case 3", () => {
  expect(generateHashtag(" Hello there thanks for trying my Kata")).toBe(
    "#HelloThereThanksForTryingMyKata",
  );
});

test("test case 4", () => {
  expect(generateHashtag([...Array(140).fill("a")].join(""))).toBe(false);
});

test("test case 5", () => {
  expect(generateHashtag(" ".repeat(200))).toBe(false);
});

test("test case 6", () => {
  expect(generateHashtag("code" + " ".repeat(140) + "wars")).toBe("#CodeWars");
});

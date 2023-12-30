import { countSmileys } from "./smiley_taces";

test("case1", () => {
  expect(countSmileys([])).toBe(0);
});

test("case2", () => {
  expect(countSmileys([":D", ":~)", ";~D", ":)"])).toBe(4);
});

test("case3", () => {
  expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
});

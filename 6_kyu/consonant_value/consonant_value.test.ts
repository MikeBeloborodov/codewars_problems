import { countConsonantValue } from "./consonant_value";

test("case1", () => {
  expect(countConsonantValue("zodiac")).toBe(26);
});

test("case2", () => {
  expect(countConsonantValue("chruschtschov")).toBe(80);
});

test("case3", () => {
  expect(countConsonantValue("xggybgapukstealyzdemwrs")).toBe(73);
});

test("case4", () => {
  expect(countConsonantValue("eciiqiiiikraagvuegkacmfduptnm")).toBe(63);
});

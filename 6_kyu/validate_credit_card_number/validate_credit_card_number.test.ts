import { validateCreditCardNumber } from "./validate_credit_card_number";

test("test case 1", () => {
  expect(validateCreditCardNumber(123)).toBe(false);
});

test("test case 2", () => {
  expect(validateCreditCardNumber(1)).toBe(false);
});

test("test case 3", () => {
  expect(validateCreditCardNumber(2121)).toBe(true);
});

test("test case 4", () => {
  expect(validateCreditCardNumber(1230)).toBe(true);
});

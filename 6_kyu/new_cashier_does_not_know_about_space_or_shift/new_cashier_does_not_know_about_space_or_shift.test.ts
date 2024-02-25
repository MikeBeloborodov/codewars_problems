import { getOrder } from "./new_cashier_does_not_know_about_space_or_shift";

describe("test cases", () => {
  it("should test", () =>
    expect(
      getOrder(
        "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza",
      ),
    ).toBe(
      "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke",
    ));
});

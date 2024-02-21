import { vaporcode } from "./v_a_p_o_r_c_o_d_e";

describe("test cases", () => {
  it("should test", () =>
    expect(vaporcode("Lets go to the movies")).toBe(
      "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S",
    ));
});

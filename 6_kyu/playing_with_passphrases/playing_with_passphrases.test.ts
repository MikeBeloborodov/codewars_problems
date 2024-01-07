import { playPass } from "./playing_with_passphrases";

test("test case 1", () => {
  expect(playPass("I LOVE YOU!!!", 1)).toBe("!!!vPz fWpM J");
});

test("test case 2", () => {
  expect(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)).toBe(
    "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO",
  );
});

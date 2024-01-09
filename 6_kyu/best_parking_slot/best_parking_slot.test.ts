import { bestParkingSlot } from "./best_parking_slot";

test("test case 1", () => {
  expect(bestParkingSlot(["STORE", "OPEN", "CORRAL"])).toBe(1);
});

test("test case 2", () => {
  expect(
    bestParkingSlot([
      "STORE",
      "TAKEN",
      "CORRAL",
      "TAKEN",
      "OPEN",
      "CORRAL",
      "OPEN",
    ]),
  ).toBe(4);
});

test("test case 3", () => {
  expect(bestParkingSlot(["STORE", "OPEN", "TAKEN", "OPEN", "CORRAL"])).toBe(3);
});

test("test case 4", () => {
  expect(
    bestParkingSlot([
      "STORE",
      "TAKEN",
      "TAKEN",
      "CORRAL",
      "TAKEN",
      "OPEN",
      "OPEN",
      "TAKEN",
      "CORRAL",
    ]),
  ).toBe(5);
});

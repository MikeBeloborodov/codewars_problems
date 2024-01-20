import { getVolumeOfCuboid } from "./volume_of_cuboid";

describe("test cases", () => {
  it("should return 4", () => expect(getVolumeOfCuboid(1, 2, 2)).toBe(4));
  it("should return 60", () => expect(getVolumeOfCuboid(6, 2, 5)).toBe(60));
});

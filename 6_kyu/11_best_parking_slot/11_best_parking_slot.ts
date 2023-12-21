/*
 https://www.codewars.com/kata/5859aaf04facfeb0d4002051/train/javascript

  Todd is looking for the best place to park in the grocery store parking lot. Todd knows that there's a sequence of events that happens whenever he buys groceries:

When he first arrives, he walks straight into the store (where the carts are kept).
After completing shopping, he will return to his car with his cart to put the groceries away.
He will walk with the now empty cart to the nearest cart corral, and deposit it.
He will walk back to his car.
This particular parking lot is fairly simple. The store is located on the far left, there is a single row of parking, with some number of cart corrals interspersed within them. For example:

["STORE", "TAKEN", "TAKEN", "CORRAL", "TAKEN", "OPEN", "OPEN", "TAKEN", "CORRAL"]
Each index is one "space" of walking.

In this case, the best spot for Todd would be at index 5. He would take 5 steps to get to the store, then 5 steps to get back to his car, then 2 steps to get to a cart corral, then 2 steps to get back, for a total of 14 steps.

Return the index of the parking spot Todd should choose. Since Todd is driving in from the side without the store on it, if there's a tie in distance, pick the one that's the furthest from the store. (Less driving. Todd is incredibly lazy.)
  * */

enum Slots {
  "STORE",
  "CORRAL",
  "TAKEN",
  "OPEN",
}

interface MyMap {
  to_store: number;
  to_corral: number | undefined;
  total: number | undefined;
}

const bestParkingSlot = (arr: Array<keyof typeof Slots>): number => {
  let mapArr: MyMap[] = [];
  arr.forEach((item, index) => {
    if (item === "OPEN") {
      mapArr.push({ to_store: index, to_corral: undefined, total: undefined });
    }
  });
  arr.forEach((item, index) => {
    if (item === "CORRAL") {
      mapArr.forEach((item) => {
        if (
          !item.to_corral ||
          item.to_corral > Math.abs(index - item.to_store)
        ) {
          item.to_corral = Math.abs(index - item.to_store);
          item.total = item.to_corral + item.to_store;
        }
      });
    }
  });
  mapArr.sort((x, y) => {
    return x.total && y.total ? x.total - y.total : 0;
  });
  mapArr = mapArr.filter((item, index, array) => item.total === array[0].total);
  if (mapArr.length > 1)
    mapArr = mapArr.sort((x, y) => y.to_store - x.to_store);
  return mapArr[0].to_store;
};

const case1 = bestParkingSlot(["STORE", "OPEN", "CORRAL"]);
console.assert(case1 === 1, "case1");

const case2 = bestParkingSlot([
  "STORE",
  "TAKEN",
  "CORRAL",
  "TAKEN",
  "OPEN",
  "CORRAL",
  "OPEN",
]);
console.assert(case2 === 4, "case2");

const case3 = bestParkingSlot(["STORE", "OPEN", "TAKEN", "OPEN", "CORRAL"]);
console.assert(case3 === 3, "case3");

const case4 = bestParkingSlot([
  "STORE",
  "TAKEN",
  "TAKEN",
  "CORRAL",
  "TAKEN",
  "OPEN",
  "OPEN",
  "TAKEN",
  "CORRAL",
]);
console.assert(case4 === 5, "case4");

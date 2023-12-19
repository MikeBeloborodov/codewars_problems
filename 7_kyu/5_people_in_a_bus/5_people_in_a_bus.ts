/*
  There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
  * */

// my solution

const peopleNumber = (busStops: Array<[number, number]>): number => {
  return busStops.reduce((prev, curr, index, array) => {
    return prev + array[index][0] - array[index][1];
  }, 0);
};

const case1 = peopleNumber([
  [10, 0],
  [3, 5],
  [5, 8],
]);
console.assert(
  case1 === 5,
  `peopleNumber([[10,0],[3,5],[5,8]]) === 5 but it is ${case1}`,
);

const case2 = peopleNumber([
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
]);
console.assert(
  case2 === 17,
  `peopleNumber([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) === 17 but it is ${case2}`,
);

const case3 = peopleNumber([
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
]);
console.assert(
  case3 === 21,
  `peopleNumber([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) === 21 but it is ${case3}`,
);

// clever solution
const cleverPeopleNumber = (busStops: Array<[number, number]>): number =>
  busStops.reduce((rem, [on, off]) => rem + on - off, 0);

export const mazeRunner = (maze: number[][], directions: string[]): string => {
  let answer = "";
  let y = maze.findIndex((subArr) => subArr.includes(2));
  let x = maze[y].findIndex((e) => e === 2);
  directions.every((dir) => {
    y = dir === "N" ? y - 1 : dir === "S" ? y + 1 : y;
    x = dir === "W" ? x - 1 : dir === "E" ? x + 1 : x;
    answer =
      maze[y] === undefined || maze[y][x] === undefined || maze[y][x] === 1
        ? "Dead"
        : maze[y][x] === 3
          ? "Finish"
          : answer;
    return answer === "Dead" || answer === "Finish" ? false : true;
  });
  return answer ? answer : "Lost";
};

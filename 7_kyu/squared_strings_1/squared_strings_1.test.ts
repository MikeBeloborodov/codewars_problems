import { oper, vertMirror, horMirror } from "./squared_strings_1";

test("case1", () => {
  expect(
    oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"),
  ).toBe("QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
});

test("case2", () => {
  expect(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt")).toBe(
    "yeCt\nCSbg\nJVhv\nlVHt",
  );
});

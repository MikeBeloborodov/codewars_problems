/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
  * */

// my solution

export const dashatize = (num: number): string | "NaN" => {
  let res = Math.abs(num)
    .toString()
    .split("")
    .map((item) => (parseInt(item) % 2 !== 0 ? `-${item}-` : item))
    .join("")
    .replace(/--/g, "-");
  if (res[0] === "-") res = res.slice(1);
  if (res[res.length - 1] === "-") res = res.slice(0, res.length - 1);
  return Number.isNaN(num) ? "NaN" : res;
};

// regexp solution
//function dashatize2(num: number) {
//  return String(num)
//    .replace(/([13579])/g, "-$1-")
//    .replace(/--+/g, "-")
//    .replace(/(^-|-$)/g, "");
//}

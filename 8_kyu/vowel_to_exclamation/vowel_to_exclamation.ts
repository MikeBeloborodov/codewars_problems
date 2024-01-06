/*
  https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript

    Description:
  Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

  Examples
  replace("Hi!") === "H!!"
  replace("!Hi! Hi!") === "!H!! H!!"
  replace("aeiou") === "!!!!!"
  replace("ABCDE") === "!BCD!"
* */

export const replace = (s: string): string => {
  return s.replace(/[aeiou]/gi, "!");
};

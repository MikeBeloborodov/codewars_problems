/*
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"
  * */

const playPass = (s: string, n: number): string => {
  return s
    .split("")
    .map((item) => {
      if (new RegExp(/[a-zA-z]/).test(item)) {
        const newCharCode = item.toUpperCase().charCodeAt(0) + n;
        return newCharCode > 90
          ? String.fromCharCode(64 + Math.abs(90 - newCharCode))
          : String.fromCharCode(newCharCode);
      } else {
        return item;
      }
    })
    .map((item, index) =>
      index % 2 === 0 ? item.toUpperCase() : item.toLowerCase(),
    )
    .map((item) =>
      Number.isNaN(parseInt(item)) ? item : Math.abs(parseInt(item) - 9),
    )
    .reverse()
    .join("");
};

const case1 = playPass("I LOVE YOU!!!", 1);
console.assert(case1 === "!!!vPz fWpM J", "case1 === '!!!vPz fWpM J'");

const case2 = playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2);
console.assert(
  case2 === "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO",
  'case2 === "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"',
);

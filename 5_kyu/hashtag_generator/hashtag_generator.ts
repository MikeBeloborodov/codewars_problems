/*
  https://www.codewars.com/kata/52449b062fb80683ec000024

  
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
  * */

export function generateHashtag(str: string): string | boolean {
  const validString = returnValidString(str);

  if (!validString) return false;

  let wordArray: string[] = makeWordArray("# " + validString);
  wordArray = wordArray.map((word) => capitalizeFirstLetter(word));

  return wordArray.join("");
}

function returnValidString(str: string): string | boolean {
  const strArray = str
    .trim()
    .split(" ")
    .filter((word) => (word ? true : false));

  if (strArray.length === 0) return false;
  if (strArray.join("").length >= 140) return false;

  return strArray.join(" ");
}

function capitalizeFirstLetter(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

function makeWordArray(str: string): string[] {
  return str
    .trim()
    .split(" ")
    .filter((word) => word);
}

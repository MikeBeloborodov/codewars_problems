export const encrypt = (text: string | null, n: number): string | null => {
  if (text === "") return "";
  if (!text) return null;

  for (let i = 0; i < n; i++) {
    let left = "";
    let right = "";
    text.split("").forEach((item, index) => {
      if (index % 2 === 0) right += item;
      else left += item;
    });
    text = left + right;
  }

  return text;
};

export const decrypt = (encTxt: string | null, n: number): string | null => {
  if (encTxt === "") return "";
  if (!encTxt) return null;

  for (let i = 0; i < n; i++) {
    let left: string = encTxt.slice(0, Math.floor(encTxt.length / 2));
    let right: string = encTxt.slice(Math.floor(encTxt.length / 2));
    encTxt = right
      .split("")
      .reduce(
        (acc, next, indx) =>
          left[indx] ? acc + next + left[indx] : acc + next,
        "",
      );
  }

  return encTxt;
};

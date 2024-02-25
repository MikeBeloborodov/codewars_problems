export const getOrder = (input: string): string => {
  const menu = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];
  const result: string[][] = [];
  while (input) {
    menu.some((item) => {
      if (input.includes(item.toLowerCase())) {
        const prevInputLen = input.length;
        input = input.replace(new RegExp(`${item.toLowerCase()}`, "g"), "");
        const newInputLen = input.length;
        result.push(
          [...Array((prevInputLen - newInputLen) / item.length)].fill(item),
        );
        return true;
      }
      return false;
    });
  }
  return result.flat().join(" ");
};

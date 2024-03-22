export const updateLight = (current: "green" | "yellow" | "red"): string => {
  const lights = {
    green: "yellow",
    red: "green",
    yellow: "red",
  };
  return lights[current];
};

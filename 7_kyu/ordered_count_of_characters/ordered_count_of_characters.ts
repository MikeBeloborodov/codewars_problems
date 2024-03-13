export const orderedCount = (text: string): Array<[string, number]> => {
  return text.split("").reduce(
    (result, next) => {
      const isNotPresent = result.every((item) => {
        if (item[0] === next) {
          item[1] += 1;
          return false;
        }
        return true;
      });

      if (isNotPresent) result.push([next, 1]);

      return result;
    },
    [] as Array<[string, number]>,
  );
};

export const count = (s: string) => {
  return s.split("").reduce((obj: any, next) => {
    if (obj[next]) obj[next]++;
    else obj[next] = 1;
    return obj;
  }, {});
};

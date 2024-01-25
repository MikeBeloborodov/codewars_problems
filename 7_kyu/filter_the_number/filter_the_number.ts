export const filterString = (value: string): number =>
  +value.replace(/\D/g, "");

export const calculateYears = (
  principal: number,
  interest: number,
  tax: number,
  desired: number,
): number => {
  for (let i = 0; ; i++) {
    if (principal >= desired) return i;
    const dividents = principal * interest;
    principal = principal + (dividents - dividents * tax);
  }
};

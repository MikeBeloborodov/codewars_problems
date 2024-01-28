export const nbMonths = (
  startPriceOld: number,
  startPriceNew: number,
  savingperMonth: number,
  percentLossByMonth: number,
): number[] => {
  let months = 0;
  let savings = startPriceOld - startPriceNew;

  while (savings < 0) {
    ++months;
    if (months % 2 === 0) percentLossByMonth += 0.5;
    startPriceNew = startPriceNew - (startPriceNew * percentLossByMonth) / 100;
    startPriceOld = startPriceOld - (startPriceOld * percentLossByMonth) / 100;
    savings = startPriceOld + months * savingperMonth - startPriceNew;
  }

  return [months, Math.round(savings)];
};

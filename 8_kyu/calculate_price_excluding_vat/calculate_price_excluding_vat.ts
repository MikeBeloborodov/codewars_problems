export const excludingVatPrice = (price: number | null) =>
  price !== null ? Number((price / 1.15).toFixed(2)) : -1;

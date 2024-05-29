export const rmMarkedElements = (
  integer_list: number[],
  values_list: number[],
) => integer_list.filter((item) => !values_list.includes(item));

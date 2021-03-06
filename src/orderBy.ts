type OrderByFunction = (
  data: Object[],
  fieldName: string,
  order?: string
) => Object[];

const orderBy: OrderByFunction = (data = [], fieldName = "", order = "ASC") => {
  return data.sort((a, b) => {
    if (order === "DESC") {
      return b[fieldName] > a[fieldName]
        ? 1
        : a[fieldName] > b[fieldName]
        ? -1
        : 0;
    }

    return a[fieldName] > b[fieldName]
      ? 1
      : b[fieldName] > a[fieldName]
      ? -1
      : 0;
  });
};

export default orderBy;

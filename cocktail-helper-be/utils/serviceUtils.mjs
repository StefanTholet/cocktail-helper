export const transformCategory = (category, data) => {
  return {
    name: category,
    subItems: data.map((x) => {
      return { name: Object.values(x)[0] }
    }),
  }
}

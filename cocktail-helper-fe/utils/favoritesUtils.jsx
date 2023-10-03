export const addIsFavoriteProp = (data, favorites) => {
  return (
    data &&
    data.map((x) => {
      if (favorites) {
        x.isFavorite = favorites.includes(x.idDrink)
      }
      return x
    })
  )
}

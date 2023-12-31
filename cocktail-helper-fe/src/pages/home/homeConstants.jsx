export const SEARCH_INITIAL_STATE = {
  search: '',
  searchOption: 'name',
}

export const RADIO_INPUTS = [
  { name: 'searchOption', label: 'Search by name', value: 'name' },
  { name: 'searchOption', label: 'Search by ingredient', value: 'ingredient' },
  {
    name: 'searchOption',
    label: 'Search ingredient',
    value: 'searchIngredient',
  },
]

export const SEARCH_SECTION_TITLES_MAPPER = {
  name: 'Cocktails by name',
  ingredient: 'Cocktails by ingredient',
  searchIngredient: 'Ingredient details',
}

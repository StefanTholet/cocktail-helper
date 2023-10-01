const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/'
const LISTS = BASE_URL + 'list.php?'

export const CATEGORY_LIST = LISTS + 'c=list'
export const GLASSES_LIST = LISTS + 'g=list'
export const INGREDIENTS_LIST = LISTS + 'i=list'
export const ALCOHOLIC_FILTERS_LIST = LISTS + 'a=list'

const SEARCH_BY_NAME = 'search.php?s='
const SEARCH_BY_INGREDIENT = 'filter.php?i='
const SEARCH_INGREDIENT = 'search.php?i='

export const SEARCH_TYPE_MAPPER = {
  name: BASE_URL + SEARCH_BY_NAME,
  ingredient: BASE_URL + SEARCH_BY_INGREDIENT,
  searchIngredient: BASE_URL + SEARCH_INGREDIENT
}

export const GET_COCKTAIL_BY_ID = BASE_URL + 'lookup.php?i='

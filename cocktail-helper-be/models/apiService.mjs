import axios from 'axios'
import {
  CATEGORY_LIST,
  GLASSES_LIST,
  INGREDIENTS_LIST,
  ALCOHOLIC_FILTERS_LIST
} from '../constants/api.mjs'

export const getCategories = async () => {
  let [categories, glasses, ingredients, alcoholic] = await Promise.all([
    axios.get(CATEGORY_LIST),
    axios.get(GLASSES_LIST),
    axios.get(INGREDIENTS_LIST),
    axios.get(ALCOHOLIC_FILTERS_LIST)
  ])

  categories = {
    name: 'categories',
    subItems: categories.data.drinks.map((x) => {
      console.log(x)
      return { name: Object.values(x)[0] }
    })
  }
  return { categories, glasses, ingredients, alcoholic }
}

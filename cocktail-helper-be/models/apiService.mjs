import axios from 'axios'
import { transformCategory } from '../utils/serviceUtils.mjs'
import {
  CATEGORY_LIST,
  GLASSES_LIST,
  INGREDIENTS_LIST,
  ALCOHOLIC_FILTERS_LIST,
} from '../constants/api.mjs'

export const getCategories = async () => {
  const [categories, glasses, ingredients, alcoholic] = await Promise.all([
    axios.get(CATEGORY_LIST),
    axios.get(GLASSES_LIST),
    axios.get(INGREDIENTS_LIST),
    axios.get(ALCOHOLIC_FILTERS_LIST),
  ])

  return [
    transformCategory('Categories', categories.data.drinks),
    transformCategory('Glasses', glasses.data.drinks),
    transformCategory('Ingredients', ingredients.data.drinks),
    transformCategory('Alcoholic', alcoholic.data.drinks),
  ]
}

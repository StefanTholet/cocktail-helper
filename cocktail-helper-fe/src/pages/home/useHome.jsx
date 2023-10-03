import { useMemo } from 'react'
import useForm from '../../hooks/useForm'
import useThrottleFetch from '../../hooks/useThrottleFetch'
import useAuthContext from '../../hooks/useAuthContext'
import useManageFavorites from '../../hooks/useManageFavorites'
import { addIsFavoriteProp } from '../../utils/favoritesUtils'

import { SEARCH_INITIAL_STATE } from './homeConstants'

const useHome = () => {
  const { values, onChange } = useForm(SEARCH_INITIAL_STATE)
  const { user } = useAuthContext()
  let [searchResults, isLoading] = useThrottleFetch(
    values,
    'http://localhost:3000/api/search'
  )
  const manageFavorites = useManageFavorites()

  const modifiedResults = useMemo(
    () => addIsFavoriteProp(searchResults, user?.favorites),
    [searchResults, user?.favorites]
  )

  return { user, values, onChange, isLoading, manageFavorites, modifiedResults }
}

export default useHome

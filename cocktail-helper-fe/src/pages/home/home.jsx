import SearchSection from '../../components/searchSection/searchSection'
import SearchResults from '../../components/searchResults/searchResults'
import CocktailCard from '../../components/cocktailCard/cocktailCard'
import Ingredient from '../../components/ingredient/ingredient'
import { Row, Spinner } from 'react-bootstrap'
import RadioBtn from '../../components/radioBtn/radioBtn'
import useForm from '../../hooks/useForm'
import useThrottleFetch from '../../hooks/useThrottleFetch'
import useAuthContext from '../../hooks/useAuthContext'
import useManageFavorites from '../../hooks/useManageFavorites'
import { SEARCH_INITIAL_STATE, RADIO_INPUTS } from './homeConstants'

const Home = () => {
  const { values, onChange } = useForm(SEARCH_INITIAL_STATE)
  const { user } = useAuthContext()
  const [searchResults, isLoading] = useThrottleFetch(
    values,
    'http://localhost:3000/api/search'
  )
  const manageFavorites = useManageFavorites()

  return (
    <Row>
      <SearchSection values={values} onChange={onChange}>
        <RadioBtn.Container classes="mt-2">
          <div className="d-flex">
            {RADIO_INPUTS.map((radio) => (
              <RadioBtn
                key={radio.value}
                value={radio.value}
                checked={values.searchOption === radio.value}
                label={radio.label}
                name={radio.name}
                onChange={onChange}
              />
            ))}
          </div>
        </RadioBtn.Container>
      </SearchSection>

      <SearchResults>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {searchResults
              ? searchResults.map((data) => (
                  <div key={data.idDrink || data.idIngredient}>
                    {values.searchOption === 'searchIngredient' ? (
                      <Ingredient content={data.strDescription} />
                    ) : (
                      <CocktailCard
                        key={data.idDrink}
                        manageFavorites={manageFavorites}
                        data={data}
                        user={user}
                      />
                    )}
                  </div>
                ))
              : null}
          </>
        )}
      </SearchResults>
    </Row>
  )
}

export default Home

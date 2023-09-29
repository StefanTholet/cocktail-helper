import SearchSection from '../../components/searchSection/searchSection'
import SearchResults from '../../components/searchResults/searchResults'
import CocktailCard from '../../components/card/card'
import { Row, Spinner } from 'react-bootstrap'
import RadioBtn from '../../components/radioBtn/radioBtn'
import useForm from '../../../hooks/useForm'
import useFetchSearch from '../../../hooks/useFetchSearch'
import { SEARCH_INITIAL_STATE, RADIO_INPUTS } from './homeConstants'

const Home = () => {
  const [values, onChange] = useForm(SEARCH_INITIAL_STATE)
  const [searchResults, isLoading] = useFetchSearch(values)

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
        ) : searchResults && values.searchOption !== 'searchIngredient' ? (
          searchResults.map((data) => (
            <CocktailCard key={data.strDrink} cocktail={data} />
          ))
        ) : !isLoading && searchResults ? (
          <>
            {searchResults.map((ingredient) => (
              <div key={ingredient.strDescription}>
                {ingredient.strDescription}
              </div>
            ))}
          </>
        ) : null}
      </SearchResults>
    </Row>
  )
}

export default Home

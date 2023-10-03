import SearchSection from '../../components/searchSection/searchSection'
import SearchResults from '../../components/searchResults/searchResults'
import CocktailCard from '../../components/cocktailCard/cocktailCard'
import Ingredient from '../../components/ingredient/ingredient'
import { Row, Spinner } from 'react-bootstrap'
import RadioBtn from '../../components/radioBtn/radioBtn'
import useHome from './useHome'

import { RADIO_INPUTS, SEARCH_SECTION_TITLES_MAPPER } from './homeConstants'

const Home = () => {
  const {
    user,
    values,
    onChange,
    isLoading,
    manageFavorites,
    modifiedResults,
  } = useHome()

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

      <SearchResults title={SEARCH_SECTION_TITLES_MAPPER[values.searchOption]}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {modifiedResults
              ? modifiedResults.map((data) => (
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

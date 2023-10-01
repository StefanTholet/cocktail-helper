import { useCallback } from 'react'
import SearchSection from '../../components/searchSection/searchSection'
import SearchResults from '../../components/searchResults/searchResults'
import Card from '../../components/card/card'
import { CardHeader, Row, Spinner } from 'react-bootstrap'
import RadioBtn from '../../components/radioBtn/radioBtn'
import useForm from '../../hooks/useForm'
import useThrottleFetch from '../../hooks/useThrottleFetch'
import useAuthContext from '../../hooks/useAuthContext'
import { SEARCH_INITIAL_STATE, RADIO_INPUTS } from './homeConstants'

const Home = () => {
  const [values, onChange] = useForm(SEARCH_INITIAL_STATE)
  const { user } = useAuthContext()
  const [searchResults, isLoading] = useThrottleFetch(
    values,
    'http://localhost:3000/search'
  )

  const displayResults = useCallback(() => {
    const searchType = values.searchOption

    if (searchResults) {
      if (searchType !== 'searchIngredient') {
        return searchResults.map((data) => (
          <Card key={data.strDrink}>
            <CardHeader title={data.strDrink}>
              <Card.Text>{data.strAlcoholic}</Card.Text>
            </CardHeader>
            <Card.Image imgUrl={data.strDrinkThumb} alt={data.strDrink} />
            <Card.Body>
              {data.strIngredient1 && data.strIngredient2 ? (
                <Card.Text>{`${data.strIngredient1}, ${data.strIngredient2}, ...`}</Card.Text>
              ) : null}
              <div className="d-flex justify-content-between">
                <Card.Action value={'See more...'}>See more...</Card.Action>
                {user ? (
                  <Card.Action className="ms-1" value={'Add to favorites'}>
                    Add to favorites
                  </Card.Action>
                ) : null}
              </div>
            </Card.Body>
          </Card>
        ))
      } else {
        return (
          <>
            {searchResults.map((ingredient) => (
              <div key={ingredient.strDescription}>
                {ingredient.strDescription}
              </div>
            ))}
          </>
        )
      }
    }
  }, [searchResults, user])

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
        {isLoading ? <Spinner /> : displayResults()}
      </SearchResults>
    </Row>
  )
}

export default Home

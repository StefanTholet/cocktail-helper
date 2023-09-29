import SearchSection from '../../components/searchSection/searchSection'
import { Row } from 'react-bootstrap'
import RadioBtn from '../../components/radioBtn/radioBtn'
import useForm from '../../../hooks/useForm'
import useFetchSearch from '../../../hooks/useFetchSearch'
import { SEARCH_INITIAL_STATE, RADIO_INPUTS } from './homeConstants'

const Home = () => {
  const [values, onChange] = useForm(SEARCH_INITIAL_STATE)
  const searchResults = useFetchSearch(values)
  console.log(searchResults)
  return (
    <Row>
      <SearchSection values={values} onChange={onChange}>
        <RadioBtn.Container>
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
    </Row>
  )
}

export default Home

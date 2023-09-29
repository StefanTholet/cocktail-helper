import SearchSection from '../../components/searchSection/searchSection'
import { Row } from 'react-bootstrap'
import useForm from '../../../hooks/useForm'
import useFetchSearch from '../../../hooks/useFetchSearch'
import { SEARCH_INITIAL_STATE } from './homeConstants'

const Home = () => {
  const [values, onChange] = useForm(SEARCH_INITIAL_STATE)
  const searchResults = useFetchSearch(values)
  console.log(searchResults)
  return (
    <Row>
      <SearchSection values={values} onChange={onChange} />
    </Row>
  )
}

export default Home

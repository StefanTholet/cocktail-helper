import { Col } from 'react-bootstrap'

const SearchResults = ({ children }) => {
  return (
    <Col className="mt-5 d-flex flex-wrap gap-4 justify-content-center">
      {children}
    </Col>
  )
}
export default SearchResults

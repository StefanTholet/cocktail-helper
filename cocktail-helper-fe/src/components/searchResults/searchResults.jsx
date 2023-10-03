import { Col, Row } from 'react-bootstrap'

const SearchResults = ({ title, children }) => {
  return (
    <Row>
      {title ? (
        <Col className="mt-5 col-12">
          <h3 className="text-center">{title}</h3>
        </Col>
      ) : null}
      <Col className="mt-2 d-flex flex-wrap gap-4 justify-content-center">
        {children}
      </Col>
    </Row>
  )
}
export default SearchResults

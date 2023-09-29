import { Container, Row, Col, Form } from 'react-bootstrap'
import styles from './searchSection.module.css'

const SearchSection = ({ values, onChange }) => {
  return (
    <Row>
      <Col>
        <h2>Search Cocktails</h2>
        <Form>
          <Form.Group controlId="searchInput">
            <Form.Control
              className={styles['search-input']}
              type="text"
              placeholder="Search for cocktails..."
              name="search"
              value={values.search}
              onChange={onChange}
            />
          </Form.Group>
          {/* <Button variant="primary" type="submit">
                Search
              </Button> */}
        </Form>
      </Col>
    </Row>
  )
}

export default SearchSection

import { Row, Col, Form, FormGroup } from 'react-bootstrap'
import styles from './searchSection.module.css'

const SearchSection = ({ values, onChange, children }) => {
  return (
    <Row>
      <Col>
        <h2>Search Cocktails</h2>
        <Form>
          <FormGroup className="d-flex gap-2">
            <Form.Control
              className={styles['search-input']}
              type="text"
              placeholder="Begin your search"
              name="search"
              value={values.search}
              onChange={onChange}
            />
          </FormGroup>
          {children}
        </Form>
      </Col>
    </Row>
  )
}

export default SearchSection

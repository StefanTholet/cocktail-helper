import { Row, Col, Form, Button, FormGroup } from 'react-bootstrap'
import styles from './searchSection.module.css'

const SearchSection = ({ values, onChange, children }) => {
  console.log(values)
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
            <Button variant="primary" type="submit">
              Search
            </Button>
          </FormGroup>
          {children}
          {/* <FormGroup>
            <div className="d-flex">
              <Form.Check
                inline
                label="Search by name"
                type="radio"
                id="searchByName"
                name="searchOption"
                value="name"
                checked={values.searchOption === 'name'}
                onChange={onChange}
              />
              <Form.Check
                inline
                label="Search by ingredient"
                type="radio"
                id="searchByIngredient"
                name="searchOption"
                value="ingredient"
                checked={values.searchOption === 'ingredient'}
                onChange={onChange}
              />
              <Form.Check
                inline
                label="Search ingredient"
                type="radio"
                id="searchIngredient"
                name="searchOption"
                value="searchIngredient"
                checked={values.searchOption === 'searchIngredient'}
                onChange={onChange}
              />
            </div>
          </FormGroup> */}
        </Form>
      </Col>
    </Row>
  )
}

export default SearchSection

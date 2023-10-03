import { Row, Col } from 'react-bootstrap'
import Form from '../form/form'
import styles from './searchSection.module.css'

const SearchSection = ({ values, onChange, children }) => {
  return (
    <Row>
      <Col>
        <h2>Search Cocktails</h2>
        <Form>
          <Form.Input
            className={styles['search-input']}
            name="search"
            type="text"
            value={values.search}
            handleChange={onChange}
            placeholder="Begin your search"
          />
          {children}
        </Form>
      </Col>
    </Row>
  )
}

export default SearchSection

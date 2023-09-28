import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import FilterSelect from './filterSelect'

const SearchSection = ({ filters }) => {
  const filterCategories = Object?.keys(filters)
  console.log(filterCategories)
  return (
    <section className="search-section">
      <Container>
        <Row>
          <Col>
            <h2>Search Cocktails</h2>
            <Form>
              <Form.Group controlId="searchInput">
                <Form.Control
                  type="text"
                  placeholder="Search for cocktails..."
                  // value={searchInput}
                  // onChange={handleSearchInputChange}
                />
              </Form.Group>
              <Row>
                {filterCategories.map((category) => (
                  <FilterSelect
                    key={category}
                    category={category}
                    options={Object.values(filters[category]).map(
                      (option) => Object.values(option)[0]
                    )}
                  />
                ))}
              </Row>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SearchSection

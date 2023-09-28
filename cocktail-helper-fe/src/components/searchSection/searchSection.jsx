import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const SearchSection = () => {
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

import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap'
import DropdownMenu from './dropdownMenu'
import useGetCategories from './useGetCategories'
import styles from './header.module.css'

const Header = () => {
  const categories = useGetCategories()

  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Cocktail Helper
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Contact
              </Nav.Link>
            </Nav>
            {categories ? <DropdownMenu categories={categories} /> : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={styles['hero-section']}>
        <Container>
          <Row>
            <Col md={6}>
              <h1>Welcome Cocktail Helper</h1>
              <p>Let us assist you in your cocktail journey</p>
              <Button variant="primary">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  )
}
export default Header

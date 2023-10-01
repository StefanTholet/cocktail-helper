import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap'
import DropdownMenu from '../dropdownMenu/dropdownMenu'
import useGetCategories from '../../hooks/useGetCategories'
import useAuthContext from '../../hooks/useAuthContext'
import useLogout from '../../hooks/useLogout'
import styles from './header.module.css'

const Header = () => {
  const categories = useGetCategories()
  const { user } = useAuthContext()
  const logout = useLogout()
  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Cocktail Helper
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {categories ? <DropdownMenu items={categories} /> : null}
            <Nav className="w-100">
              {user ? (
                <Nav.Link as={Link} to="/dashboard">
                  My Dashboard
                </Nav.Link>
              ) : null}
              {user ? (
                <>
                  <span className="text-white-50 ms-auto align-self-center">
                    {user.email}
                  </span>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="ms-auto" as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/sign-up">
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
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

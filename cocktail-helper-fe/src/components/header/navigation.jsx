import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import DropdownMenu from '../dropdownMenu/dropdownMenu'

const Navigation = ({ categories, user, logout }) => {
  return (
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
  )
}

export default Navigation

import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae justo eget odio lacinia fringilla.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              <p>Email: info@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="#!">Facebook</Link>
              </li>
              <li>
                <Link href="#!">Twitter</Link>
              </li>
              <li>
                <Link href="#!">Instagram</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} Your Cocktail App. All rights
        reserved.
      </div>
    </footer>
  )
}

export default Footer

import { Container, Row, Col, Button } from 'react-bootstrap'
import Navigation from './navigation'
import useGetCategories from './useGetCategories'
import useAuthContext from '../../hooks/useAuthContext'
import useLogout from '../../hooks/useLogout'
import styles from './header.module.css'

const Header = () => {
  const categories = useGetCategories()
  const { user } = useAuthContext()
  const logout = useLogout()
  return (
    <Container>
      <Navigation user={user} categories={categories} logout={logout} />
      <div className={styles['hero-section']}>
        <Row>
          <Col md={6}>
            <h1>Welcome Cocktail Helper</h1>
            <p>Let us assist you in your cocktail journey</p>
            <Button variant="primary">Learn More</Button>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
export default Header

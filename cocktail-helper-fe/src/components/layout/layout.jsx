import { Container } from 'react-bootstrap'
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container className={styles.main}>{children}</Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout

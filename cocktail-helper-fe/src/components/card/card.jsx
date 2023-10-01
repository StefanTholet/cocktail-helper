import { Card as BSCard, Button } from 'react-bootstrap'
import styles from './card.module.css'

const Card = ({ children }) => {
  return <BSCard className={styles.card}>{children}</BSCard>
}

const Header = ({ title, children, ...rest }) => (
  <BSCard.Header className="d-flex justify-content-between" {...rest}>
    <BSCard.Title>{title}</BSCard.Title>
    {children}
  </BSCard.Header>
)

const Body = ({ children, ...rest }) => (
  <BSCard.Body {...rest}>{children}</BSCard.Body>
)

const Text = ({ children, ...rest }) => (
  <BSCard.Text {...rest}>{children}</BSCard.Text>
)

const Action = ({ value, clickHandler = () => {}, children, ...rest }) => (
  <Button onClick={clickHandler} variant="primary" value={value} {...rest}>
    {children}
  </Button>
)

const Image = ({ imgUrl, alt, children, ...rest }) => (
  <BSCard.Img src={imgUrl} alt={alt} {...rest}>
    {children}
  </BSCard.Img>
)

Card.Body = Body
Card.Text = Text
Card.Action = Action
Card.Header = Header
Card.Image = Image

export default Card

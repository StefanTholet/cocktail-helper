import { Card, Button } from 'react-bootstrap'
import styles from './card.module.css'

const CocktailCard = ({ cocktail }) => {
  return (
    <Card className={styles.card}>
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{cocktail.strDrink}</Card.Title>
        <Card.Text>{cocktail.strAlcoholic}</Card.Text>
      </Card.Header>
      <Card.Img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <Card.Body>
        <Card.Text>
          Ingredients: {cocktail.strIngredient1}, {cocktail.strIngredient2}, ...
        </Card.Text>
        <Button variant="primary">Check Details</Button>
      </Card.Body>
    </Card>
  )
}

export default CocktailCard

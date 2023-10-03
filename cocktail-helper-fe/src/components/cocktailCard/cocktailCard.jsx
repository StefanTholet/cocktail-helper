import Card from '../card/card'

const CocktailCard = ({ data, user, manageFavorites }) => {
  return (
    <Card key={data.strDrink}>
      <Card.Header title={data.strDrink}>
        <Card.Text>{data.strAlcoholic}</Card.Text>
      </Card.Header>
      <Card.Image imgUrl={data.strDrinkThumb} alt={data.strDrink} />
      <Card.Body>
        {data.strIngredient1 && data.strIngredient2 ? (
          <Card.Text>{`${data.strIngredient1}, ${data.strIngredient2}, ...${data.idDrink}`}</Card.Text>
        ) : null}
        <div className="d-flex justify-content-between">
          <Card.Action value={'See more...'}>See more...</Card.Action>
          {user ? (
            <Card.Action
              variant={
                user?.favorites?.includes(data.idDrink) ? 'danger' : 'success'
              }
              value={
                user?.favorites?.includes(data.idDrink)
                  ? 'Remove favorite'
                  : 'Add to favorites'
              }
              clickHandler={() =>
                manageFavorites(
                  data.idDrink,
                  !user?.favorites?.includes(data.idDrink)
                    ? 'add-favorite'
                    : 'remove-favorite'
                )
              }
            >
              {!user?.favorites?.includes(data.idDrink)
                ? 'Add favorite'
                : 'Remove favorite'}{' '}
            </Card.Action>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  )
}

export default CocktailCard

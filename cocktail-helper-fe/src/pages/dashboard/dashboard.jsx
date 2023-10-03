import { useState, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Row, Col, Button } from 'react-bootstrap'
import Toggler from '../../components/toggler/toggler'
import CocktailCard from '../../components/cocktailCard/cocktailCard'
import SearchResults from '../../components/searchResults/searchResults'
import Form from '../../components/form/form'
import useAuthContext from '../../hooks/useAuthContext'
import useAddCocktail from '../../hooks/useAddCocktail'
import useManageFavorites from '../../hooks/useManageFavorites'

import {
  FORM_DEFAULT_INPUTS,
  FORM_INITIAL_STATE,
  INGREDIENT_INPUTS_INITIAL_STATE,
} from './dashboardConstants'

import styles from './dashboard.module.css'

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false)
  const { user } = useAuthContext()
  const { values, onChange, onAdd, onRemove, ingredientInputs } =
    useAddCocktail(FORM_INITIAL_STATE, INGREDIENT_INPUTS_INITIAL_STATE, user)

  const manageFavorites = useManageFavorites()

  const favoriteCocktails = useMemo(
    () =>
      user?.favoriteCocktails?.map((x) => {
        x.isFavorite = true
        return x
      }),
    [user?.favoriteCocktails]
  )

  return (
    <Row>
      <Col>
        <h2>Dashboard</h2>
        <Button className="mt-3" onClick={() => setShowForm((state) => !state)}>
          Add cocktail
        </Button>
        <Form
          className={`${styles.form} ${showForm ? styles.show : styles.hide}`}
          values={values}
          // handleSubmit={handleSubmit}
        >
          <Form.Title title={'Add your cocktail'} />
          {FORM_DEFAULT_INPUTS.map((input) => (
            <Form.Input
              key={input.name}
              handleChange={onChange}
              value={values[input.name]}
              name={input.name}
              label={input.label}
              type={input.type}
            />
          ))}

          {ingredientInputs.map((ingredient) => (
            <Toggler
              key={ingredient.id || 1}
              onAdd={onAdd}
              onRemove={() => onRemove(ingredient.name)}
              classes="d-flex mt-3 gap-1 align-items-center"
            >
              <Form.Input
                label={ingredient.label}
                name={ingredient.name}
                value={values[ingredient.name]}
                handleChange={onChange}
                type={'text'}
              />
            </Toggler>
          ))}
          <Form.Submit name="Submit" className="mt-4" />
        </Form>
        {favoriteCocktails ? (
          <SearchResults title="Your favorites">
            {favoriteCocktails.map((data) => (
              <CocktailCard
                key={uuidv4()}
                data={data}
                user={user}
                manageFavorites={manageFavorites}
              />
            ))}
          </SearchResults>
        ) : null}
      </Col>
    </Row>
  )
}

export default Dashboard

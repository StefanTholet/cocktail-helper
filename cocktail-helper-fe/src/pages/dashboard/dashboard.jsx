import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import CocktailCard from '../../components/cocktailCard/cocktailCard'
import SearchResults from '../../components/searchResults/searchResults'
import Form from '../../components/form/form'
import useForm from '../../hooks/useForm'
import useAuthContext from '../../hooks/useAuthContext'
import {
  FORM_DEFAULT_INPUTS,
  FORM_INITIAL_STATE,
  INGREDIENT_INPUTS_INITIAL_STATE
} from './dashboardConstants'

import styles from './dashboard.module.css'

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false)
  const [ingredientInputs, setIngredientInputs] = useState(
    INGREDIENT_INPUTS_INITIAL_STATE
  )

  const [values, onChange, disableSubmit] = useForm(FORM_INITIAL_STATE)
  const { user } = useAuthContext()

  const favoriteCocktails = user.favoriteCocktails

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
            <>
              <Form.Input
                label={ingredient.label}
                name={ingredient.name}
                value={values[ingredient.name]}
                handleChange={onChange}
                type={'text'}
              />
            </>
          ))}
          <Form.Submit
            name="Submit"
            className="mt-4"
            disabled={disableSubmit}
          />
        </Form>
        {favoriteCocktails ? (
          <SearchResults>
            {favoriteCocktails.map((data) => (
              <CocktailCard key={data.drinkId} data={data[0]} />
            ))}
          </SearchResults>
        ) : null}
      </Col>
    </Row>
  )
}

export default Dashboard

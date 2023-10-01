import { useLocation } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import useAuth from '../../hooks/useAuth'
import Form from '../../components/form/form'
import useForm from '../../hooks/useForm'
import { LOGIN_INPUTS, FORM_INITIAL_STATE, TITLE_MAPPER } from './authConstants'

import styles from './auth.module.css'

const Auth = () => {
  const location = useLocation().pathname.split('/')[1]
  const [values, onChange, disableSubmit] = useForm(FORM_INITIAL_STATE)

  const [handleSubmit, error] = useAuth(location)

  return (
    <>
      <Form className={styles.form} values={values} handleSubmit={handleSubmit}>
        <Form.Title title={TITLE_MAPPER[location]} />
        {LOGIN_INPUTS.map((input) => (
          <Form.Input
            key={input.name}
            handleChange={onChange}
            value={values[input.name]}
            name={input.name}
            label={input.label}
            type={input.type}
          />
        ))}
        <Form.Submit
          name={TITLE_MAPPER[location]}
          className="mt-4"
          disabled={disableSubmit}
        />
        {error && (
          <Alert variant="danger" className="mt-3">
            {error?.response?.data?.message || error}
          </Alert>
        )}
      </Form>
    </>
  )
}

export default Auth

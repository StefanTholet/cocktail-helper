import Form from '../../components/form/form'
import useForm from '../../../hooks/useForm'
import { LOGIN_INPUTS, FORM_INITIAL_STATE } from './loginConstants'

import styles from './login.module.css'

const Login = () => {
  const [values, onChange, disableSubmit] = useForm(FORM_INITIAL_STATE)

  return (
    <>
      <Form className={styles.form}>
        <Form.Title title={'Login'} />
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
          name="Register"
          className="mt-4"
          disabled={disableSubmit}
        />
      </Form>
    </>
  )
}

export default Login

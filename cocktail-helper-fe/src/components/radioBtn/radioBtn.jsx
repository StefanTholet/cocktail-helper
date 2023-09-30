import { Form } from 'react-bootstrap'

const RadioBtn = ({ onChange, name, value, checked, label }) => {
  return (
    <Form.Check
      inline
      label={label}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  )
}

const RadioContainer = ({ children, classes, ...rest }) => (
  <Form.Group className={classes ? classes : ''} {...rest}>
    {children}{' '}
  </Form.Group>
)

RadioBtn.Container = RadioContainer

export default RadioBtn

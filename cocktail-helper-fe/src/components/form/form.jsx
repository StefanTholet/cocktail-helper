import { Form as BSForm, Button } from 'react-bootstrap'

const Form = ({ handleSubmit, values, errors = [], children, ...rest }) => {
  return (
    <BSForm onSubmit={(e) => handleSubmit(e, values)} {...rest}>
      {errors.length > 0 && (
        <div className="alert alert-danger">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      {children}
    </BSForm>
  )
}

const Title = ({ title, ...rest }) => <h2 {...rest}>{title}</h2>

const Input = ({ handleChange, name, label, type, value, ...rest }) => (
  <BSForm.Group controlId={name} className="mt-2">
    <BSForm.Label>{label}</BSForm.Label>
    <BSForm.Control
      {...rest}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
    />
  </BSForm.Group>
)

const Submit = ({ disabled, name, ...rest }) => (
  <Button type="submit" disabled={disabled} {...rest}>
    {name}
  </Button>
)

Form.Title = Title
Form.Input = Input
Form.Submit = Submit

export default Form

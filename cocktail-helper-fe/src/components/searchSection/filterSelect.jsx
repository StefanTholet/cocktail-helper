import { Col, Form } from 'react-bootstrap'

const FilterSelect = ({ category, options }) => {
  console.log(options)
  return (
    <Col>
      <Form.Group controlId={category}>
        <Form.Label>{category}</Form.Label>
        <Form.Control
          as="select"
          // value={categoryFilter}
          // onChange={handleCategoryChange}
        >
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Col>
  )
}

export default FilterSelect

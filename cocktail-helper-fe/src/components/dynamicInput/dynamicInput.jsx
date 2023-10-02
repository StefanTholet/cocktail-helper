import { useState } from 'react'
import { Button } from 'react-bootstrap'
//two buttons for show and hide of the input
// **Props**
// children to show and hide based on input clicked
// onClick function that is decorated with the internal click handler of the component which returns the state of this component to the parent component

const DynamicInput = ({ clickHandler, children }) => {
  const [show, setShow] = useState(false)

  const onClick = () => {
    if (clickHandler) clickHandler()
    setShow((state) => !state)
  }

  return (
    <>
      <Button onClick={onClick}>{show ? 'Hide' : 'Show'}</Button>
      {children && show ? children : null}
    </>
  )
}

export default DynamicInput

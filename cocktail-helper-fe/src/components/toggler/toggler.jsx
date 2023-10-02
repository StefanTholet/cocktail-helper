import { useState } from 'react'
import { Button } from 'react-bootstrap'
import styles from './toggler.module.css'

const Toggler = ({ onAdd, onRemove, classes, children }) => {
  const [show, setShow] = useState(false)

  const onClick = () => {
    const updatedShow = !show
    setShow(updatedShow)
    if (onAdd && updatedShow) onAdd()
    if (onRemove && !updatedShow) onRemove()
  }

  return (
    <div className={classes ? classes : ''}>
      <Button
        onClick={onClick}
        className={styles.toggle}
        style={{ marginTop: show ? '1.9rem' : null }}
      >
        {show ? 'Remove' : 'Add'}
      </Button>
      <div className={show ? styles.show : styles.hide}>{children}</div>
    </div>
  )
}

export default Toggler

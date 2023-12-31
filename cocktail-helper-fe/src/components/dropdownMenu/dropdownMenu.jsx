import { Dropdown } from 'react-bootstrap'
import MenuItem from './menuItem'

const DropdownMenu = ({ items }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="nested-dropdown">
        Select
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items
          ? items.map((item, i) => <MenuItem key={item.name + i} item={item} />)
          : null}
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default DropdownMenu

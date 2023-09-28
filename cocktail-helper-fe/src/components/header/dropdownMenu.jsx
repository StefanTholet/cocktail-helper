import { Fragment } from 'react'
import { Dropdown } from 'react-bootstrap'

const DropdownMenu = ({ categories }) => {
  console.log(categories)
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="nested-dropdown">
        Select
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((category) => (
          <Fragment key={category.item}>
            <Dropdown>
              <Dropdown.Toggle
                className="w-100"
                variant="success"
                id={`nested-dropdown-${category.item}`}
              >
                {category.item}
              </Dropdown.Toggle>
              {category.subItems ? (
                <Dropdown.Menu>
                  {category.subItems.map((subItem) => (
                    <Dropdown.Item key={subItem} href={subItem}>
                      {subItem}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              ) : null}
            </Dropdown>
            <Dropdown.Divider />
          </Fragment>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default DropdownMenu

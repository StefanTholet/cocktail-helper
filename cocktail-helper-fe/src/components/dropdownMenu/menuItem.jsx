import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

const MenuItem = ({ item }) => {
  return (
    <>
      <Dropdown>
        {item.subItems && item.subItems.length > 0 ? (
          <>
            <Dropdown.Toggle variant="success" className="w-100 mb-2">
              {item.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {item.subItems.map((subItem) => (
                <MenuItem key={subItem.name} item={subItem} />
              ))}
            </Dropdown.Menu>
          </>
        ) : (
          <Dropdown.Item
            as={Link}
            to={`/type/${item.name
              .toLowerCase()
              .split(' ')
              .join('-')
              .split('-/-')
              .join('-')}`}
          >
            {item.name}
          </Dropdown.Item>
        )}
      </Dropdown>
    </>
  )
}

export default MenuItem

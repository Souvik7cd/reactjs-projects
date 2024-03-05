import PropTypes from 'prop-types'
import MenuItem from "./MenuItem"
import "./TreeView.css"

const MenuList = ({list = [], display=true}) => {
  return (
    <ul className={`menu-list-container ${!display ? "d-none" : ""}`} >
      {
        list && list.length > 0 
          ? list.map((listItem, index) => (
              <MenuItem item={listItem} key={index}/>
          ) )
          : null
      }
    </ul>
  )
}

MenuList.propTypes = {
  list: PropTypes.array,
  display: PropTypes.bool,
}

export default MenuList
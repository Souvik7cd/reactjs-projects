import MenuList from "./MenuList";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import PropTypes from 'prop-types'
import "./TreeView.css";

const MenuItem = ({ item = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="menu-item">
      <div className="menu-item-label">
        {item.label}
        {item.children && item.children.length > 0 && (
          <span className="menu-item-icon" onClick={handleToggleMenu}>
            {!isExpanded ? <FaPlus /> : <FaMinus />}
          </span>
        )}
      </div>
      {item.children && <MenuList list={item.children} display={isExpanded} />}
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.array,
}

export default MenuItem;

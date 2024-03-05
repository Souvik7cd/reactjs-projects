import { useEffect, useState } from "react";
import MenuList from "./MenuList";
import "./TreeView.css";
import { FaMinus, FaPlus } from "react-icons/fa";

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

export default MenuItem;

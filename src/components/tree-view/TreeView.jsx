import PropTypes from 'prop-types'
import MenuList from "./MenuList";
import "./TreeView.css";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="bg-treeview">
      <div className="menu-container">
        <MenuList list={menus} />
      </div>
    </div>
  );
};

TreeView.propTypes = {
  menus: PropTypes.array
}

export default TreeView;

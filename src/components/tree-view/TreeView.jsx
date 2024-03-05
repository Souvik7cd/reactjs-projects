import { useState } from "react";
import "./TreeView.css";
import { useEffect } from "react";
import MenuList from "./MenuList";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="bg-treeview">
      <div className="menu-container">
        <MenuList list={menus} />
      </div>
    </div>
  );
};

export default TreeView;

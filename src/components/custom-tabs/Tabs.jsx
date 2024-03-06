import PropTypes from "prop-types";
import { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabsContent = [{ label: "", content: "" }], onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setCurrentTabIndex(index);
    onChange(index);
  };
  return (
    <div className="tab-group">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            key={index}
            onClick={() => handleTabChange(index)}
            className={`label ${currentTabIndex === index && "label-active"}`}
          >
            {tabItem.label}
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabsContent: PropTypes.array,
  onChange: PropTypes.func,
};

export default Tabs;

import Tabs from "./Tabs";
import "./Tabs.css";

const CustomTabs = () => {

  const tabs = [
    {
      label: "Tab 1",
      content: <h2>Hello world</h2>,
    },
    {
      label: "Tab 2",
      content: "Hello world2",
    },
    {
      label: "Tab 3",
      content: `Hey there`,
    },
  ];
  
  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  }

  return (
    <div className="tabs-wrapper bg-tabs">
      <h1>CustomTabs</h1>
      <Tabs tabsContent={tabs} onChange={handleChange}/>
    </div>
  );
};

export default CustomTabs;

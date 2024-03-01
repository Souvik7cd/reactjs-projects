import data from "./data";
import "./Accordion.css";
import { useState } from "react";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [multiAccordion, setMultiAccordion] = useState(false);

  const toggleMultiSelection = () => {
    if(!multiAccordion) {
      if(selected !== null){
        setMultiple([selected]);
      }
      setSelected(null);
    }
    if(multiAccordion) {
      setMultiple([]);
    }
    setMultiAccordion(!multiAccordion);
  }

  const handleSingleSelection = (selectedId) => {
    setSelected(selectedId === selected ? null : selectedId);
  };

  const handleMultiSelection = (selectedId) => {
    if(multiple.length === 0) {
      setMultiple([selectedId]);
    }
    else if(multiple.includes(selectedId)) {
      const index = multiple.indexOf(selectedId);
      setMultiple(multiple.toSpliced(index,1));
    }
    else {
      setMultiple([...multiple, selectedId]);
    }
  };

  return (
    <div className="wrapper">
      <button
        className="enable-btn"
        onClick={toggleMultiSelection}
      >
        Toggle Multiple Accordion
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div key={dataItem.id} className="accordion-item">
                <div
                  className="accordion-title"
                  onClick={() => (
                    !multiAccordion ? handleSingleSelection(dataItem.id) : handleMultiSelection(dataItem.id)
                  )}
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {!multiAccordion && selected && selected === dataItem.id && (
                  <div className="accordion-body">
                    <span>{dataItem.answer}</span>
                  </div>
                )}
                {multiAccordion && multiple && multiple.includes(dataItem.id) && (
                  <div className="accordion-body">
                    <span>{dataItem.answer}</span>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;

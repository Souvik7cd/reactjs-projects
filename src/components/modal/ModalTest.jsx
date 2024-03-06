import { useState } from "react";
import Modal from "./Modal";
import { IoMdClose } from "react-icons/io";
import "./Modal.css"

const ModalTest = () => {
  
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };


  const header = (
    <>
      <div>Modal Header</div>
      <button className="close-btn" onClick={()=>setShowModal(false)}>
        <IoMdClose />
      </button>
    </>
  );
  const body = (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis
        non, voluptatem earum molestias deleniti? Aperiam architecto corporis,
        cum quia debitis officia maxime, deleniti a, quisquam iste vitae dolorem
        delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis
        non, voluptatem earum molestias deleniti? Aperiam architecto corporis,
        cum quia debitis officia maxime, deleniti a, quisquam iste vitae dolorem
        delectus!
      </p>
    </div>
  );
  const footer = (
    <>
      <button onClick={()=>setShowModal(false)}>OK</button>
      <button onClick={()=>setShowModal(false)}>Cancel</button>
    </>
  );

  return (
    <div className="wrapper bg-modaltest">
      <button className="open-modal-btn" onClick={handleOpenModal}>
        Open Modal
      </button>
      <Modal header={header} body={body} footer={footer} show={showModal} />
    </div>
  );
};

export default ModalTest;

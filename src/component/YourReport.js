import React from "react";
import Header from "./Header";
import ListMap from "./ListMap";
import Modal from "react-modal";
import "./Style/Yourreport.css";

function YourReport() {
  return (
    <div className="Tab">
      <div className="FullHeader">
      <div className="headerPlus">
      <div><img src="./profils/Ipdf.svg"  alt=""/></div>
        <Header Name="Your report" />
        
        <div className="Plus">
          <Modale />
          </div>
      </div>
      <hr />
      </div>
      <div className="Form">
        <form>
          <label>
            <input
              type="text"
              name="name"
              placeholder="search by items register"
          
            />
          </label>
        </form>
        </div>
        <div className="IdReport">
          <ListMap />
        </div>
      </div>
    
  );
}

export default YourReport;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    borderRadius: "10px",
    boxShadow: "2px 2px 25px grey",
  },
};

export function Modale() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>
        {" "}
        <div className="Plus">
          <img src="./profils/plus.png" alt="" />
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="Modale">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add your report</h2>

          <a href="file.pdf" download>
            Upload PDF
          </a>
          <p>Select date</p>
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2022-07-22"
            min="2022-01-01"
            max="2030-12-31"
          ></input>
          <p>Select items</p>
          <div>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
          </div>

          <button onClick={closeModal}>Send</button>
        </div>
      </Modal>
    </div>
  );
}

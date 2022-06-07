import React, { useCallback} from "react";
import useFitText from "use-fit-text";
import Header from "./Header";
import Modal from "react-modal";
import "./Style/ToDoList.css";

function TodoList() {
  return (
    <div className="Tab">
      <div className="FullHeader">
      <div className="headerPlus">
        <div>
          <img src="./profils/ITodo.svg"  alt="" />
        </div>
        <Header Name="ToDo List" />
        <div className="Plus">
          <Modale />
        </div>
      </div>
      <hr />
      </div>
      <div className="Search">
        <div className="Form">
          <form>
            <label>
              <input type="text" name="name" placeholder="search..." />
            </label>
          </form>
        </div>
        <div className="ListColor">
          <p>All</p>
          <div>
            <Color colore="red" />
          </div>

          <div>
            {" "}
            <Color colore="yellow" />
          </div>
          <div>
            <Color colore="blue" />
          </div>
          <div>
            <Color colore="pink" />
          </div>
        </div>
      </div>
      <div className="TdFlex">
        <div className="OneTd">
          <div className="RowTd">
            <Color colore="red" />
            <div className="Title">Vanne</div>
            <Delete />
          </div>
          <hr />
          <Example1 name="Demonter la vanne FV7005 pour vendredi et remonter le positionneur avant lundi voir plus encore de textr avant lundi voir plus encore de textr avant lundi voir plus encore de textr avant lundi voir plus encore de textr avant lundi voir plus encore de textr et encore de textr et encore de textr et plus" />
        </div>
        <div className="OneTd">
          <div className="RowTd">
            <Color colore="yellow" />
            <div className="Title">Vanne</div>
            <Delete />
          </div>
          <hr />
          <Example1 name="Demonter la vanne FV7005 pour vendredi et remonter le positionneur " />
        </div>
        <div className="OneTd">
          <div className="RowTd">
            <Color colore="blue" />
            <div className="Title">Vanne</div>
            <Delete />
          </div>
          <hr />
          <Example1 name="Demonter la vanne FV7005 pour vendredi et remonter le positionneur avant lundi voir plus encore de textr avant lundi voir plus encore de textr avant lundi voir plus encore de textr avant lundi voir plus encore " />
        </div>
        <div className="OneTd">
          <div className="RowTd">
            <Color colore="pink" />
            <div className="Title">Vanne</div>
            <Delete />
          </div>
          <hr />
          <Example1 name="Demonter la vanne FV7005 pour vendredi et remonter le positionneur avant lundi voir plus encore de textr avant lundi voir plus encore de textr avant lundi voir plus encore de textr" />
        </div>
        <div className="OneTd">
          <div className="RowTd">
            <Color colore="red" />
            <div className="Title">calcul number characteres</div>
            <Delete />
          </div>
          <hr />
          <Example1 name="Demonter la vanne FV7005" />
        </div>
        <div className="OneTd">
          <div className="RowTd">
            <Color colore="blue" />
            <div className="Title">Vanne</div>
            <Delete />
          </div>
          <hr />
          <Example1 name="Demonter la vanne FV7005 pour vendredi et remonter le positionneur avant lundi voir plus encore de textr avant lundi voir plus encore de textr avant lundi voir plus encore de textr avant lundi voir plus encore de textr " />
        </div>
        <div className="OneTd">
          <div className="RowTd">
            <Color colore="yellow" />
            <div className="Title">Vanne</div>
            <Delete />
          </div>
          <hr />
          <Example1 name="Demonter la vanne FV7005 pour vendredi " />
        </div>
      </div>
    </div>
  );
}

function Example1(props) {
  const onStart = useCallback(() => {
    console.log("Example 3 resizing started");
  }, []);
  const onFinish = useCallback((fontSize) => {
    console.log("Example 3 resizing finished", fontSize);
  }, []);
  const { fontSize, ref } = useFitText({ maxFontSize: 500, onStart, onFinish });

  return (
    <>
      <div
        ref={ref}
        style={{
          fontSize,
          height: 270,
          width: "100%",
          color: "black",
        }}
      >
        {props.name}
      </div>
    </>
  );
}

function Delete() {
  return (
    <div className="Delete">
      <p>X</p>
    </div>
  );
}
function Color(props) {
  return (
    <div className="Color">
      <p style={{ backgroundColor: props.colore }}>{props.level}</p>
    </div>
  );
}

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

function Modale() {
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
          <div>
          <p> Select indicator</p>
          <div className="ListColor">
            <Color colore="red" />

            <Color colore="yellow" />
            <Color colore="blue" />
            <Color colore="pink" />
          </div>
          </div>
          <div>
          <p>Title</p>
          <input type="text" id="" name="" placeholder="max 25 characters" />
          </div>
          <div>
          <p>Description</p>
          <textarea
            id=""
            name=""
            rows="4"
            cols="50"
            placeholder="max 300 characters"
          />
          </div>
          <button onClick={closeModal}>Send</button>
        </div>
      </Modal>
    </div>
  );
}

export default TodoList;

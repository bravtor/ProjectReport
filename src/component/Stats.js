import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Modal from "react-modal";

import Header from "./Header";
import { useState } from "react";

import "./Style/Stats.css";

function Stats() {
  return (
    <div className="Tab">
      <div className="FullHeader">
        <div className="headerPlus">
          <div>
            <img src="./profils/Iinfo.svg" alt="" />
          </div>
          <Header Name="Statistics" />
          <div className="Plus">
            <Modale />
          </div>
        </div>
        <hr />
      </div>
      <div className="colonne">
        <div className="ColTwo">
          <div className="Der">
            <ReminderP
              Name="Boris Vian"
              Title="Invitation our teams for a breakfast in McDonald"
            />

            <ReminderP
              Name="Boris Vian"
              Title="Ce valve 75001 must be cheched as soon as possible. Don't forget grease"
            />
          </div>
          <br />
          <div className="Der">
            <Reminder
              Name="Boris Vian"
              Title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            />

            <Reminder
              Name="Boris Vian"
              Title="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            />

            <Reminder
              Name="Boris Vian"
              Title="Meeting at 9pm room 109 this thursday"
            />

            <Reminder
              Name="Hugo Fray"
              Title="For all, please provide date of summer holiday by email before the 10 may, date of summer holiday by email before the 10 may"
            />

            <Reminder
              Name="Boris Vian"
              Title="Reminder, all reports have to be send before 6pm"
            />
          </div>
        </div>

        <div className="ColOne">
          <div className="Dog">
            <div className="DogA">
              <Doughnut data={date} />
            </div>
            <div className="DogB">
              <Doughnut data={dateb} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;

ChartJS.register(ArcElement, Tooltip, Legend);

export const date = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [5, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const dateb = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 9, 3, 15, 32, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function Reminder({ Name, Title }) {
  return (
    <div className="Reminder">
      <div className="box Titre">
        <div>{Name}</div>
        <div>{Title}</div>
      </div>
      <div className="box">
        <ChangeColor />
        <hr />
      </div>
    </div>
  );
}
function ReminderP({ Name, Title }) {
  return (
    <div className="ReminderP">
      <div className="box Titre">
        <div>{Name}</div>
        <div>{Title}</div>
      </div>
      <div className="box">
        <Sup />
        <hr />
      </div>
    </div>
  );
}

function Sup() {
  return <p>sup</p>;
}

function ChangeColor() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <div>
      <button className={isActive ? "bg-salmon" : ""} onClick={handleClick}>
        Lu
      </button>
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
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Reminder</h2>
        
          <div className="StatCheck">
            <label>
              <input type="checkbox" />
             For All
            </label>
            <label>
              <input type="checkbox" />
             My team
            </label>
            <label>
              <input type="checkbox" />
              All supervisors
            </label>
            <label>
              <input type="checkbox" />
              All Technicians
            </label>
          </div>
          <div>
            <p>Description</p>
            <textarea
              id=""
              name=""
              rows="4"
              cols="50"
              placeholder="max 250 characters"
            />
          </div>
          <button onClick={closeModal}>Send</button>
        </div>
      </Modal>
    </div>
  );
}

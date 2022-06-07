import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AllReports from "./AllReports";
import YourReport from "./YourReport";
import ToDoList from "./ToDoList";

import { Profil } from "./ListMap";
import SetProfil from "./Admin/SProfil";
import AllItems from "./Admin/Items";
import AllSpare from "./Admin/SetSpare";
import SetItems from "./Admin/SItems";
import ProfSet from "./Admin/Profils";
import SSpare from "./Admin/SSpare";
import Stats from "./Stats";
import IDsite from "./IDsite";

import Help from "./Admin/Help_User";

import "./Style/Menu.css";

function Menu() {
  return (
    <Router>
      <div className="Colonne">
        <div className="Menu">
          <div className="App-header">
            <div className="FrMenu">
              <img src="./profils/IInfo.svg" alt="" className="ColoIcon" />
              <div className="SectionMenu">Information</div>
            </div>

            <Link to="/stats">Stats</Link>
            <Link to="/allreports">All reports</Link>

            <div className="FrMenu">
              <img src="./profils/Iadd.svg" alt="" className="ColoIcon" />
              <div className="SectionMenu">Your reports</div>
            </div>

            <Link to="/yourreport">Your report</Link>
            <Link to="/todolist">ToDo List</Link>

            <div className="FrMenu">
              <img src="./profils/ISet.svg" alt="" className="ColoIcon" />
              <div className="SectionMenu">Admin</div>
            </div>

            <Link to="/setprofil">A/U Profils</Link>
            <Link to="/profil">Set Profils</Link>
            <hr />

            <Link to="/setitems">A/U Items</Link>
            <Link to="/items">Set Items</Link>
            <hr />

            <Link to="/setspare">A/U Spare</Link>
           

            

            <Link to="/sspare">Set Spare</Link>

            <div className="Deconnection">
            <div className="FrMenu">
            <img src="./profils/Iadd.svg" alt="" className="ColoIcon" />
              <Link to="/help">Help</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="Content">
          <div className="Prof">
            <div className="ProfA">
              <IDsite />
            </div>
            <div className="ProfA">
              <Profil />
            </div>
            <div className="ProfA">
              <div className="Alert">
                <p>3</p>
              </div>
              <div className="Info">
                <p>2</p>
              </div>
              <div className="AllInfo">
                <p>5</p>
              </div>
            </div>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/stats" element={<Stats />}></Route>
            <Route exact path="/allreports" element={<AllReports />}></Route>
            <Route exact path="/yourreport" element={<YourReport />}></Route>
            <Route exact path="/todolist" element={<ToDoList />}></Route>
            <Route exact path="/setprofil" element={<SetProfil />}></Route>
            <Route exact path="/setitems" element={<AllItems />}></Route>
            <Route exact path="/setspare" element={<AllSpare />}></Route>
            <Route exact path="/items" element={<SetItems />}></Route>
            <Route exact path="/profil" element={<ProfSet />}></Route>
            <Route exact path="/sspare" element={<SSpare />}></Route>
            <Route exact path="/help" element={<Help />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Menu;

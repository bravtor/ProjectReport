import React from "react";
import Header from "../Header";

import "../Style/SetItems.css";

function ProfSet() {
  return (
    <div className="Tab">
      <div className="FullHeader">
      <div className="headerPlus">
        <div><img src="./profils/ProfilSet.svg"  alt="" /> </div>
        <Header Name="Set Column Header Profils" />
      </div>
      <hr />
      </div>
      <div className="FullCheck">
        <div className="TitleCol">
          <div className="TitleBB">Identifiant</div>
          <div className="A1">
            <div className="A10">
              <Status title="Ide" />
            </div>
          </div>
        </div>
        <div className="TitleCol">
          <div className="TitleBB">Password</div>
          <div className="A1">
            <Status title="Pwd" />
          </div>
        </div>
        <div className="TitleCol">
          <div className="TitleBB">Column 3</div>
          <div className="A1">
            <div className="A10">
              <Status title="" />
            </div>
          </div>
        </div>
        <div className="TitleCol">
          <div className="TitleBB">Column 4</div>
          <div className="A1">
            <div className="A10">
              <Status title="" />
            </div>
          </div>
        </div>
        <div className="TitleCol">
          <div className="TitleBB">Column 5</div>
          <div className="A1">
            <div className="A10">
              <Status title="" />
            </div>
          </div>
        </div>
        <div className="TitleCol">
          <div className="TitleBB">Column 6</div>
          <div className="A1">
            <div className="A10">
              <Status title="" />
            </div>
          </div>
        </div>
        <div className="TitleCol">
          <div className="TitleBB">Column 7</div>
          <div className="A1">
            <div className="A10">
              <Status />
            </div>
          </div>
        </div>
        <div className="TitleCol">
          <div className="TitleBB">Column 8</div>
          <div className="A1">
            <div className="A10">
              <Status />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfSet;


function Status(props) {
  return (
    <div className="Status">
      <input
        type="test"
        id="Item1"
        name="Items1"
        placeholder={props.title}
      ></input>
    </div>
  );
}


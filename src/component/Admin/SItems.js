import React from "react";
import Header from "../Header";

import "../Style/SetItems.css";

function SetItems() {
  return (
    <div className="Tab">
      <div className="FullHeader">
        <div className="headerPlus">
          <div>
            <img src="./profils/ItemSet.svg"  alt=""/>
          </div>
          <Header Name="Set Column Header Items" />
        </div>
        <hr />
      </div>
      <div className="TitleCol">
        <div className="TitleBB">Column 1</div>
 <div className="A1">
          <div className="A10">
            <Status title="Tag" />
            <Cat />
          </div>
        </div>
      </div>
      <div className="TitleCol">
        <div className="TitleBB">Column 2</div>
        <div className="A1">
          <div className="A10">
            <Status title="Type" />
            <Cat />
          </div>
        </div>
      </div>
      <div className="TitleCol">
        <div className="TitleBB">Column 3</div>
        <div className="A1">
          <div className="A10">
            <Status title="Model" />
            <Cat />
          </div>
        </div>
      </div>
      <div className="TitleCol">
        <div className="TitleBB">Column 4</div>
        <div className="A1">
          <div className="A10">
            <Status title="Serial Number" />
            <Cat />
          </div>
        </div>
      </div>
      <div className="TitleCol">
        <div className="TitleBB">Column 5</div>
        <div className="A1">
          <div className="A10">
            <Status title="Quantity" />
            <Cat />
          </div>
        </div>
      </div>
      <div className="TitleCol">
        <div className="TitleBB">Column 6</div>
        <div className="A1">
          <div className="A10">
            <Status title="Status" />
            <Cat />
          </div>
        </div>
      </div>
      <div className="TitleCol">
        <div className="TitleBB">Column 7</div>
        <div className="A1">
          <div className="A10">
            <Status />
            <Cat />
          </div>
        </div>
      </div>
      <div className="TitleCol">
        <div className="TitleBB">Column 8</div>
        <div className="A1">
          <div className="A10">
            <Status />
            <Cat />
          </div>
        </div>
      </div>
      <div className="TitleCol">
        <div className="TitleBB">Derniére Column</div>
        <div className="Status">
          <input type="test" id="Item1" name="Items1"></input>
        </div>
        <div className="Checker">
          <div className="A1 A2">
            Add catégories
            <Status title="On_going" />
            <Status title="Maintenance" />
            <Status title="Pending" />
            <Status title="Storage" />
            <Status />
            <Status />
          </div>
          <div className="A1 A2">
            Select color
            <CColor />
            <CColor />
            <CColor />
            <CColor />
            <CColor />
            <CColor />
          </div>
          <div className="A1 A2">
            Result
            <Result color="blue" Text="On_going" />
            <Result color="red" Text="Maintenance" />
            <Result color="brown" Text="Pending" />
            <Result color="grey" Text="Storage" />
            <Result color="green" Text="" />
            <Result color="orange" Text="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetItems;

function CColor() {
  return (
    <div className=" ComponentR">
      <span className="dotW"></span>
      <span className="dotR"></span>
      <span className="dotB"></span>
      <span className="dotY"></span>
      <span className="dotG"></span>
      <span className="dotM"></span>
      <span className="dotBV"></span>
    </div>
  );
}

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

function Result(props) {
  return (
    <div className="test" style={{ backgroundColor: props.color }}>
      {props.Text}
    </div>
  );
}

function Cat(props) {
  return (
    <div>
      <div>{props.name}</div>
      <div className="InCheck">
        <input type="checkbox" />
        <label>Texte</label>
        <input type="checkbox" />
        <label>Number</label>
        <input type="checkbox" />
        <label>Date</label>
      </div>
    </div>
  );
}

import React from "react";
import Header from "../Header";
import Spare from "../Spare.json";
import { Modale } from "../YourReport";

import "../Style/AllReports.css";

function AllSpare() {
  return (
<div className="Tab">
      <div className="FullHeader">
      <div className="headerPlus">
        <div>
          <img src="./profils/AddSpare5.svg" alt="" />
        </div>
        <Header Name="Add/Update Spare" />
        <div className="Plus">
          <Modale />
          </div>
      </div>
      <hr />
      </div>
        <div className="FlexR">
          <SearchProfil />
          <FlavorForm />
        </div>
        <div className="Post">
          <Tableau />
        </div>
      </div>
     
  );
}

export default AllSpare;

function Tableau() {
  const Prof = (
    <ul>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Model</th>
         <th>Status</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Spare.map((post) => (
            <tr>
              <td>{post.type}</td>
              <td>{post.model}</td>
              <td>{post.quantity}</td>
              <td>{post.statut}</td>
              
             
            </tr>
          ))}
        </tbody>
      </table>
    </ul>
  );
  return <div>{Prof}</div>;
}

function SearchProfil() {
  return (
    <div>
      <div>
        <label htmlFor="site-search">Search the site:</label>
        <form>
          <label>
            <input type="text" name="name" placeholder="search" />
          </label>
        </form>
        <div></div>
      </div>
    </div>
  );
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Votre parfum favori est : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="filter">
          <label>Select the team :</label>

          <select value={this.state.value} onChange={this.handleChange}>
            <option value="" defaultValue>
              Choose a drink
            </option>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </div>
      </form>
    );
  }
}

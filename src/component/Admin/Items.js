import React from "react";
import Header from "../Header";
import Items from "../Items.json";
import { Modale } from "../YourReport";

import "../Style/AllReports.css";

function AllItems() {
  return (
    <div className="Tab">
    <div className="FullHeader">
    <div className="headerPlus">
      <div>
        <img src="./profils/ItemAdd.svg" alt="" />
      </div>
      <Header Name="Add/Update Items" />
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

export default AllItems;

function Tableau() {
  const Prof = (
    <ul>
      <table>
        <thead>
          <tr>
            <th>Tag</th>
            <th>Type</th>
            <th>Model</th>
            <th>Serial number</th>

            <th>Quantity</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Items.map((post) => (
            <tr>
              <td>{post.Tag}</td>
              <td>{post.type}</td>
              <td>{post.model}</td>
              <td>{post.N_Serial}</td>
              <td>{post.quantity}</td>
              <td>
                <div data-statut={post.statut} className="statut">
                  {post.statut}
                </div>
              </td>
              <td>
                <FlavorForm />
              </td>
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
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="" defaultValue>
              Choose a drink
            </option>
            <option value="CDS">CDS</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Technician">Technician</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </form>
    );
  }
}

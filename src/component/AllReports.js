import React from "react";
import Header from "./Header";
import data from "./data.json";

import "./Style/AllReports.css";

function AllReports() {
  return (
    <div className="Tab">
      <div className="FullHeader">
        <div className="headerPlus">
          <div>
            <img src="./profils/IAllReports.svg"  alt="" />
          </div>
          <Header Name="All reports" />
        </div>
        <hr />
      </div>

      <div className="FlexR">
        <SearchProfil />
      </div>
      <div className="Post">
        <Tableau />
      </div>
    </div>
  );
}

export default AllReports;

function Tableau() {
  const Prof = (
    <ul>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nom</th>

            <th>Prénom</th>
            <th>Team</th>
            <th>Fonction</th>

            <th>All Reports</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr>
              <td>
                <div className="picA">
                  <img src={post.PicProfil} width="60" height="60" alt="" />
                </div>
              </td>

              <td>{post.name}</td>
              <td>{post.surname}</td>
              <td>{post.team}</td>
              <td>{post.fonction}</td>
              <td>
                <button className="ButPic" type="button">
                  Voir
                </button>
              </td>
              <td>{post.email}</td>
              <td>{post.phone}</td>
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

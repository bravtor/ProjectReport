import React from "react";
import data from "./data.json";
import styled from "styled-components";

import { idx } from "./SelectId";
import "./Style/map.css";

function AllProfils() {
  const Prof = (
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>

          <th>Name</th>
          <th>Surname</th>
          <th>Team</th>
          <th>Function</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actif</th>
          <th>Id</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post) => (
         
            <tr >
            

              <td>
              <input type="text" placeholder={post.name} class="without_outline"></input>
              </td>
              <td>
              <input type="text" placeholder={post.surname}></input>
              </td>
              <td>
              <input type="text" placeholder={post.team}></input>
              </td>
              <td>
              <input type="text" placeholder={post.fonction}></input>
              </td>
              <td>
              <input type="text" placeholder={post.email}></input>
              </td>
              
              <td><div className="Actif">
              <input type="text" data-status={post.phone} placeholder={post.phone}></input>
              </div></td>
 
              <td>
              <input type="text" className="Actifa" data-status={post.Actif} placeholder={post.Actif}></input>
              </td>
              <td>
              <input type="text" placeholder={post.Ide}></input>
              </td>
              <td><div className="Pwd">
              <input type="text" placeholder={post.Password}></input>
           </div> </td> 
             
            </tr>
            
        ))}
      </tbody>
    </table>
  );
  return <div>{Prof}</div>;
}
function ListMap() {
  const Flex = {
    display: "flex",
    flexDirection: "column",
    fontSize: "1.5em",
    textAlign: "center",
    color: "palevioletred",
  };

  const Prof = (
    <ul>
      {data
        .filter((Liste) => Liste.id === idx)
        .map((post) => (
          <li key={post.id}>
            {post.details.map(({ info, statut }) => (
              <p key={statut}>
                <div className="Repport">
                  <div style={Flex}>{statut}</div>
                  {info}
                </div>
              </p>
            ))}
            <ul></ul>
          </li>
        ))}
    </ul>
  );

  return <div>{Prof}</div>;
}

function Profil() {
  const sidebar = (
    <ul>
      {data
        .filter((Liste) => Liste.id === idx)
        .map((post) => (
          <li key={post.id}>
            <img src={post.PicProfil} alt="" />
            <div className="MapName"> {post.name} </div>
            <div className="MapName"> {post.surname} </div>
          </li>
        ))}
    </ul>
  );
  return <div className="sidebar">{sidebar}</div>;
}

export default ListMap;
export { Profil };
export { AllProfils };

import React from "react";
import { Modale } from "../YourReport";

import BarreFilter from "../BarreFilter";

import Header from "../Header";
import data from "../data.json";
import { AllProfils } from "../ListMap";


import "../Style/SetProfil.css";


function SetProfil() {


  return (
   
    <div className="Tab">
        <div className="FullHeader">
      <div className="headerPlus">
        <div><img src="./profils/ProfilAdd.svg" alt=""/></div>
        <Header Name="Add/Update Profils" />
        
        <div className="Plus">
          <Modale />
          </div>
      </div>
      <hr />
      </div>
     
     <BarreFilter />
        <div className="SetP">
          <div className="FlexR Liste">
        
            <div className="AllProfils">
           
              <AllProfils />
            </div>
          </div>
          <div className="Fiche">
            <Fiche />
          </div>
        </div>
      </div>
   
  );
}

export default SetProfil;

function Fiche() {
  const Prof = (
    <ul>
      {data
        .filter((Liste) => Liste.id === 1)
        .map((post) => (
          <li key={post.id}>
            <div className="Ficher">
              <div className="FlexR Imgpro">
                <img src={post.PicProfil} alt="" />
                <button className="ButPic" type="button">
                  Changer la photo
                </button>
              </div>
              <div className="FlexR">
                <div className="Input">
                  <div>Name</div>
                  <input type="text" name="name" placeholder={post.name} />
                </div>
                <div className="Input">
                  <div>Surname</div>
                  <input type="text" name="name" placeholder={post.surname} />
                </div>
                <div className="Input">
                  <div>Identifiant</div>
                  <input type="text" name="name" placeholder={post.Ide} />
                </div>
                <div className="Input">
                  <div>Password</div>
                  <div className="Pas"><input type="text" name="name" placeholder={post.Password} /></div>
                </div>
                <div className="Input">
                  <div>Level</div>
                  <input type="text" name="name" placeholder={post.level} />
                </div>
                <div className="Input">
                  <div>Team</div>
                  <input type="text" name="name" placeholder={post.team} />
                </div>
                <div className="Input">
                  <div>Position</div>
                  <input type="text" name="name" placeholder={post.fonction} />
                </div>
                <div className="Input">
                  <div>Email</div>
                  <input type="text" name="name" placeholder={post.email} />
                </div>
                <div className="Input">
                  <div>Phone</div>
                  <input type="text" name="name" placeholder={post.phone} />
                </div>
              </div>
              <button className="ButSup" type="button">
                Supprimer
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
  return <div>{Prof}</div>;
}

import "./Style/Header.css";
import React from "react";


function Header(props) {
  return (
    <div className="Header">
     
      <div>{props.Name}</div>
      
    </div>
  );
}



export default Header;

import React from "react";
import Header from "../Header";
import {AllProfils} from "../ListMap";
import "../Style/SSpare.css"

function SSpare(){
    return(<div className="Tab">
        <div className="FullHeader">
      <div className="headerPlus">
        <div><img src="./profils/SetSpare.svg" alt=""/></div>
        <Header Name="Set Column Header Spare" />
        
      </div>
      <hr />
      </div>
      <div className="SpareSetList"><AllProfils /></div>
      </div>
      
      );
}

export default SSpare
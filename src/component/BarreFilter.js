import React from "react";
import "./Style/BarreFilter.css"


export default function BarreFilter() {
  return (
    <div>
      <div className="Search">
      <span class="material-icons">search</span>
        <form>
          <label>
         
            <input type="text"  name="name"  placeholder="Search..."/>
            
          </label>
        
        </form>
      </div>
    </div>
  );
}

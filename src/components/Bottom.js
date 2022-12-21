import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";

export default function Bottom({setsearchName,setfilterD}) {
    const navigate=useNavigate();
    const [filters,setfilters]=useState("");
    const [search,setsearch]=useState('');
   const searchUser=()=>{
      setsearchName(search);
      navigate('/search')
   }
  return (
    <>
      <div className="container mt-2">
        <div className="bottom d-flex flex-row " style={{ height: "30px" }}>
          <div className="flex flex-row ms-auto">
             <input type="text" value={search} placeholder="Search" onChange={(e)=>setsearch(e.target.value)} />
             <button className="btn mx-2" style={{"border" : "2px solid grey"}} onClick={searchUser}>Search</button>
          </div>
          <div className="filter mx-2 mt-1">
            <select  value={filters} onChange={(e)=>
                {  
                setfilters(e.target.value)
                setfilterD(filters);
                navigate('/filter')
                }
                }
                >
            
              <option name="filter" disabled>filter</option>
              <option name="subscription" >SUBSCRIPTION</option>
              <option name="burner" >BURNER</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

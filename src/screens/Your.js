import React, { useState, useEffect } from "react";
import { GiBurningEye, GiVibratingBall } from "react-icons/gi";
import { RxDotFilled } from "react-icons/rx";
import user from "../data/data";
import "./screens.css"
export default function Your(props) {
  const [userdetails, setuserdetails] = useState({});
  useEffect(() => {
    const fetch = () => {
      user.map((us, id) => {
        if (us.owner_id === props.YourId) {
          setuserdetails(us);
          
        }
      });
    };
    fetch();
  }, []);
  console.log(userdetails)
 
  return (
    <>
         <div className="container mt-5">
            <p className="text-center fs-2 fw-bold">Your Information</p>
            <hr className="mx-auto mt-2 w-25"></hr>
            {user.map((us,id)=>{
              if(us.owner_id== props.YourId){
                return(
                  <>
                  <div className="user-detail mt-4">
                  <>
                  <div className="d-flex flex-row mx-2 mt-4">
                  <div className="content">
                    <h4 className="mx-2" >{us.name}</h4>
                    <p className="mx-2"> <span>{us.nick}<RxDotFilled/></span> {us.budget_name}</p>
                  </div>
                 {us.card_type === 'BURNER' ?  <GiBurningEye className="Burner ms-auto mt-3  fs-2 rounded-circle" /> : <GiVibratingBall className="Burner ms-auto mt-3  fs-2 rounded-circle"/>}
                </div>
                <div className="status mx-2  d-flex flex-row">
                  <p
                    className="mx-2 badge text-dark"
                    style={{ border: "2px solid grey" }}
                  >
                 
                    {us.card_type}
                  </p>
                  {
                    us.card_type === 'BURNER'?<p className="ms-auto"> Expires: {us.expiry}</p>:
                    <p className="ms-auto">{us.expiry.substring(2)} Limit: {us.limit} SGD</p>
                  }
                </div>
                <div
                         class="progress  bg-success mx-3 mt-3"
                         style={{ width: "48rem" }}
                       ></div>
                       <div className="spent d-flex flex-row mt-4 mx-2">
                         <RxDotFilled className="dots  " />
                         <p className="mt-1">Spent</p>
                         <p className="ms-auto mt-1">{us.spent.value}&nbsp;{us.spent.currency}</p>
                       </div>
                       <div className="spent d-flex flex-row mt-2 mx-2">
                         <RxDotFilled className="dota " />
                         <p className="mt-1">Available to spend</p>
                         <p className="ms-auto mt-1">{us.available_to_spend.value}&nbsp;{us.available_to_spend.currency}</p>
                       </div>
                  </>
                  </div>
                  </>
                )
              }
            })}
            
         </div>
    </>
  );
}

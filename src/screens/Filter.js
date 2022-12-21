import React, { useState, useEffect } from "react";
import { GiBurningEye, GiVibratingBall } from "react-icons/gi";
import { RxDotFilled } from "react-icons/rx";
import user from "../data/data";
import "./screens.css";

export default function Filter(props) {
  return (
    <>
      {props.type ? (
        <div className="container">
          <div className="row">
            {user.map((us, id) => {
              if (us.card_type != props.type) {
                console.log(us.card_type, props.type);
                return (
                  <>
                    <div className="col-md-5 mx-5 mt-3">
                      <div
                        className="card "
                        style={{ width: "25rem", height: "16rem" }}
                      >
                        <div className="d-flex flex-row mx-2">
                          <div className="content">
                            <h4 className="mx-2">{us.name}</h4>
                            <p className="mx-2">
                              {" "}
                              <span>
                                {us.nick}
                                <RxDotFilled />
                              </span>{" "}
                              {us.budget_name}
                            </p>
                          </div>
                          {us.card_type === "BURNER" ? (
                            <GiBurningEye className="Burner ms-auto mt-3  fs-2 rounded-circle" />
                          ) : (
                            <GiVibratingBall className="Burner ms-auto mt-3  fs-2 rounded-circle" />
                          )}
                        </div>
                        <div className="status mx-2  d-flex flex-row">
                          <p
                            className="mx-2 badge text-dark"
                            style={{ border: "2px solid grey" }}
                          >
                            {us.card_type}
                          </p>
                          {us.card_type === "BURNER" ? (
                            <p className="ms-auto"> Expires: {us.expiry}</p>
                          ) : (
                            <p className="ms-auto">
                              {us.expiry.substring(2)} Limit: {us.limit} SGD
                            </p>
                          )}
                        </div>
                        <div className="card-body ">
                          <div
                            class="progress  bg-success"
                            style={{ width: "23rem" }}
                          ></div>
                          <div className="spent d-flex flex-row mt-2">
                            <RxDotFilled className="dots  " />
                            <p className="mt-1">Spent</p>
                            <p className="ms-auto mt-1">
                              {us.spent.value}&nbsp;{us.spent.currency}
                            </p>
                          </div>
                          <div className="spent d-flex flex-row mt-1">
                            <RxDotFilled className="dota " />
                            <p className="mt-1">Available to spend</p>
                            <p className="ms-auto mt-1">
                              {us.available_to_spend.value}&nbsp;
                              {us.available_to_spend.currency}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <p>INVALID</p>
      )}
    </>
  );
}

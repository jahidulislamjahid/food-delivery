import React, { useState } from "react";
import Carts from "./Carts.js";
import Profile from "./Profile.js";
import "./Dashboard.css";

const Dashboard = () => {
  const [current, setCurrent] = useState("Profile");
  function profileHandler(e) {
    setCurrent(e.target.value);
  }
  function cartHandler(e) {
    setCurrent(e.target.value);
  }

  return (
    <div className="button">
      <div className="d-flex my-2 justify-content-center">
        <input className="btn btn-danger w-40" onClick={profileHandler} type="button" value="Profile" />
        <input className="btn btn-danger  w-40" onClick={cartHandler} type="button" value="My Order" />
      </div>

      {(current === "Profile" && <Profile></Profile>) ||
        (current === "My Order" && <Carts></Carts>)}
    </div>
  );
};

export default Dashboard;

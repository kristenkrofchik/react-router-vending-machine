import React from "react";
import { Link } from "react-router-dom";

function Cannoli() {
  return (
    <div className="Cannoli">
        <h1>You chose the cannoli! Yum!</h1>
        <h1><Link to="/">go back</Link></h1>
    </div>
  );
}

export default Cannoli;
import React from "react";
import { Link } from "react-router-dom";

function Paleta() {
  return (
    <div className="Paleta">
        <h1>You chose the Paleta! Yum!</h1>
        <h1><Link to="/">go back</Link></h1>
    </div>
  );
}

export default Paleta;
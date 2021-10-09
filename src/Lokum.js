import React from "react";
import { Link } from "react-router-dom";

function Lokum() {
  return (
    <div className="Lokum">
        <h1>You chose the lokum! Yum!</h1>
        <h1><Link to="/">go back</Link></h1>
    </div>
  );
}

export default Lokum;
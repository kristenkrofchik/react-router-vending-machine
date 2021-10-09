import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return(
    <div className="Home">
        <h1>hello i am a dessert vending machine. what would you like to eat?</h1>
        <h1><Link to="/lokum">Lokum from Turkey!</Link></h1>
        <h1><Link to="/paleta">Paltea from Mexico!</Link></h1>
        <h1><Link to="/cannoli">Cannoli from Italy!</Link></h1>
    </div>
  );
}

export default Home;
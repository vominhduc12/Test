import React from "react";
import "../CSS/HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Music WordPress Theme</h1>
        <p>DEDICATED TO BANDS, LABELS, FESTIVALS, MUSIC STORE AND MORE...</p>
        <button className="view-demos">VIEW DEMOS</button>
      </header>
      <footer>
        <button className="buy-now">Buy now</button>
      </footer>
    </div>
  );
};

export default HomePage;

import React from "react";
import { images } from '../../helpers/images';
import { ROLE } from "../../helpers/constants";

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={images.logo} className="App-logo" alt="logo" />
        <p>Home {ROLE}</p>
        <a className="App-link" href="/about" rel="noopener noreferrer">
          About
        </a>
      </header>
    </div>
  );
};

export default HomePage;

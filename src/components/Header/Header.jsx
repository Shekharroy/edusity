import React from "react";
import "./Header.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Header = () => {
  return (
    <header className="header-section container" id="header">
      <div className="header-text">
        <h1>We ensure better education for a better world</h1>
        <p>
          Online education is a procedure of gaining skills and knowledge
          through electronic devices like computers, mobiles, laptops, etc using
          the internet. Online education makes it possible for tutors or mentors
          to reach all the students more flexibly and teach them the relevant
          skills more efficiently.
        </p>
        <button type="button" className="btn">Explore More <img src={dark_arrow}/></button>
      </div>
    </header>
  );
};

export default Header;

import { NavLink } from "react-router-dom";
import { SearchComponent } from './../search/search';
import "./header.css";
import React from "react";

export const HeaderComponent = () => {
  const rawImg = sessionStorage.getItem("img");
  const img = rawImg ? rawImg.replace(/^["']|["']$/g, "") : "";




  return (
    <header>
      <div className="headerLogo">
        <div className="headerImg">
          <img src="../../public/logoApp.png" alt="" />
        </div>
        <h2>Read App</h2>
      </div>
      <nav className="headerLinks">
        <NavLink to="/libros"><h2>Libros</h2></NavLink>
        <NavLink to="/recomendaciones"><h2>Recomendaciones</h2></NavLink>
      </nav>
      <div className="headerActions">
        <SearchComponent />
        <button className="buttonProfile">
          <div className="headerProfile">

            <NavLink to="/recomendaciones">
              <img src={img} alt="profile" />
            </NavLink>
          </div>
        </button>
      </div>
    </header>
  );
};
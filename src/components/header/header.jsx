import { NavLink } from "react-router-dom";
import { SearchComponent } from './../search/search';
import "./header.css";
import React from "react";

export const HeaderComponent = ({method, withSearch}) => {
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
      <div className="headerActions">
        <SearchComponent method={method} withSearch={withSearch} />
        <button className="buttonProfile">
        </button>
      </div>
      <nav className="headerLinks">
        <NavLink to="/libros"><h2>Libros</h2></NavLink>
        <NavLink to="/recomendaciones"><h2>Recomendaciones</h2></NavLink>
          <div className="headerProfile">

            <NavLink to="/perfil/datos">
              <img src={img} alt="profile" />
            </NavLink>
          </div>
      </nav>
    </header>
  );
};
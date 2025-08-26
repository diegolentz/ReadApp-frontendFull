import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";

export const HeaderComponent = () => {
  const location = useLocation();

  
  const hideOn = ["/login", "/"];
  if (hideOn.includes(location.pathname)) return null;

  return (
    <header>
      <div className="headerLogo">
        <h2>Read App</h2>
        <div className="headerImg">
          <img src="" alt="" />
        </div>
      </div>
      <nav className="headerLinks">
        <NavLink to="/libros">Libros</NavLink>
        <NavLink to="/recomendaciones">Recomendaciones</NavLink>
        <NavLink to="/perfil">Perfil</NavLink>
      </nav>
    </header>
  );
};
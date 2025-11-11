import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Button, IconButton, Menu, MenuItem, Box } from "@mui/material";
import { useImg } from "../../context/toastImg/toastImgContext";
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import RecommendSharpIcon from '@mui/icons-material/RecommendSharp';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';

export const HeaderComponent = () => {
  const { imgProfile } = useImg();
  const nav = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    sessionStorage.clear();
    nav("/");
  };

  return (
    <header>
      <div className="headerLogo">
        <div className="headerImg">
          <img src="../../public/logoApp.png" alt="" />
        </div>
        <h2>Read App</h2>
      </div>

      <nav className="headerLinks" >
        <IconButton
          onClick={handleMenuOpen}
          aria-controls="profile-menu"
          aria-haspopup="true"
        >
          <Avatar
            alt="profile"
            src={imgProfile}
            sx={{ width: '8rem', height: '7.5rem', border: "1.5px solid #333", position: "relative" }}
          />
          <ArrowDropDownCircleSharpIcon sx={{ color: "#333", fontSize: 25, position: "absolute", bottom: '0.5rem', right: "1rem", padding: 0 }} />
        </IconButton>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
            <MenuItem
              onClick={() => { handleMenuClose(); nav("/perfil/datos"); }}
              sx={{ fontSize: '1.5rem' }}
            >
              <ManageAccountsSharpIcon sx={{ mr: 1, color: "purple", fontSize: "1.5rem" }} />
              Perfil
            </MenuItem>
          <MenuItem
            onClick={() => { handleMenuClose(); nav("/libros"); }}
            sx={{ fontSize: '1.5rem' }}
          >
            <AutoStoriesSharpIcon sx={{ mr: 1, color: "blue", fontSize: "1.5rem" }} />
            Libros
          </MenuItem>
          <MenuItem
            onClick={() => { handleMenuClose(); nav("/recomendaciones"); }}
            sx={{ fontSize: '1.5rem' }}
          >
            <RecommendSharpIcon sx={{ mr: 1, color: "green", fontSize: "1.5rem"  }} />
            Recomendaciones
          </MenuItem>
          <MenuItem
            onClick={() => { handleMenuClose(); logOut(); }}
            sx={{ fontSize: '1.5rem' }}
          >
            <LogoutIcon sx={{ mr: 1, color: "#d9534f", fontSize: "1.5rem" }} />
            Cerrar sesión
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};
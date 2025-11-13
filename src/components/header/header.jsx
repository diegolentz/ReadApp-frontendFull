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
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';

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
            sx={{ width: '7.5rem', height: '7.5rem', boxShadow: "var(--avatarShadown)", position: "relative",
              border: '3px solid var(--border-input)' }}
          />
          <ArrowDropDownCircleSharpIcon sx={{ color: "var(--button-buy)", fontSize: 25, position: "absolute", bottom: '0.5rem', right: "1rem" }} />
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
          sx={{
            // background: 'var(--menu-bkg)'
          }}
        >
            <MenuItem
              onClick={() => { handleMenuClose(); nav("/perfil/datos"); }}
              sx={{
                gap: '1rem',
                fontSize: '1.5rem',
                '&:hover': {
                  background: 'var(--menuHover)',
                  color: 'var(--menuText)',
                }
              }}
              >
              <ManageAccountsSharpIcon sx={{ color: "purple", fontSize: "2rem", width: "3rem" }} />
              Perfil
            </MenuItem>
          <MenuItem
            onClick={() => { handleMenuClose(); nav("/libros"); }}
            sx={{
                // gap: '1rem',
                fontSize: '1.5rem',
                '&:hover': {
                  background: 'var(--menuHover)',
                  color: 'var(--menuText)',
                }
              }}
            >
            <AttachMoneySharpIcon sx={{ mr: 1, color: "green", fontSize: "2.5rem", width: "3rem"}} />
            Comprar Libros
          </MenuItem>
          <MenuItem
            onClick={() => { handleMenuClose(); nav("/recomendaciones"); }}
            sx={{
                fontSize: '1.5rem',
                '&:hover': {
                  background: 'var(--menuHover)',
                  color: 'var(--menuText)',
                }
              }}
            >
            <RecommendSharpIcon sx={{ mr: 1, color: "var(--button-buy)", fontSize: "2.5rem", width: "3rem"  }} />
            Recomendaciones
          </MenuItem>
          <MenuItem
            onClick={() => { handleMenuClose(); logOut(); }}
            sx={{
                fontSize: '1.5rem',
                '&:hover': {
                  background: 'var(--menuHover)',
                  color: 'var(--menuText)',
                }
              }}
            >
            <LogoutIcon sx={{ mr: 1, color: "#d9534f", fontSize: "2rem", width: "3rem" }} />
            Cerrar sesión
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};
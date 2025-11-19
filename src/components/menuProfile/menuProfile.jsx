import React from "react";
import './menuProfile.css';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import RecommendSharpIcon from '@mui/icons-material/RecommendSharp';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
import ChatSharpIcon from '@mui/icons-material/ChatSharp';


export const MenuProfile = () => {


    return (
        <div className="menuProfileContainer">
            <nav className="menuProfileNav" >
                <ul>
                    <li>
                        {/* <ManageAccountsSharpIcon sx={{ color: "purple", fontSize: "2rem", width: "3rem" }} /> */}
                        <a href="/perfil/datos">Mi Perfil</a></li>
                    <li>
                        {/* <AutoStoriesSharpIcon sx={{ color: "blue", fontSize: "2rem", width: "3rem" }} /> */}
                        <a href="/perfil/misLibros">Mis Libros</a></li>
                    <li>
                        {/* <RecommendSharpIcon sx={{ color: "green", fontSize: "2rem", width: "3rem" }} /> */}
                        <a href="/perfil/misRecomendaciones">Mis Recomendaciones</a></li>
                    <li>
                        {/* <StarPurple500SharpIcon sx={{ color: "yellow", fontSize: "2rem", width: "3rem" }} /> */}
                        <a href="/">Mis Valoraciones</a></li>
                    <li>
                        {/* <GroupAddSharpIcon sx={{ color: "red", fontSize: "2rem", width: "3rem" }} /> */}
                        <a href="/">Buscar Amigos</a></li>
                </ul>
                <ul>
                    <li>
                        <ChatSharpIcon sx={{ color: "black", fontSize: "2rem", width: "3rem" }} />
                        <a href="/">Chats</a></li>
                </ul>
            </nav>
        </div>
    )
}
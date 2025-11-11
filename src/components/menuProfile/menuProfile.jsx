import React from "react";
import './menuProfile.css';

export const MenuProfile = () => {


    return (
        <div className="menuProfileContainer">
            <nav>
                <ul>
                    <li><a href="/perfil/datos">Perfil</a></li>
                    <li><a href="/perfil/misLibros">Libros</a></li>
                    <li><a href="/">Recomendaciones</a></li>
                    <li><a href="/">Valoraciones</a></li>
                    <li><a href="/">Amigos</a></li>
                </ul>
                <ul>
                    <li><a href="/">Chats</a></li>
                </ul>
            </nav>
        </div>
    )
}
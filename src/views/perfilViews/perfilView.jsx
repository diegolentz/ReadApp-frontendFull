import { Outlet } from "react-router-dom"
import React from "react"
import { HeaderComponent } from './../../components/header/header';
import './perfilView.css'
import { MenuProfile } from "./../../components/menuProfile/menuProfile";

export const PerfilView = () => {
    return (
        <>
            <HeaderComponent  />
            <div className="perfilContainer">
                <MenuProfile />
                <Outlet />

            </div>

        </>
    )
}
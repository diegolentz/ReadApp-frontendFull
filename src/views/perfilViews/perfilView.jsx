import { Outlet } from "react-router-dom"
import React from "react"
import { HeaderComponent } from './../../components/header/header';

export const PerfilView = () =>{
    return(
        <>
        <HeaderComponent method={()=>{}} withSearch={false} />
        <div>PerfilView

        <Outlet />
        </div>

        </>
    )
}
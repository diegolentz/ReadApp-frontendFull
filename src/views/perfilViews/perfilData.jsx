import { Button, Divider } from "@mui/material";
import { InputApp } from "../../components/input/input";
import './perfilData.css';
import { useState, useEffect } from "react";
import React from "react";
import { userService } from "../../services/userService";
import { Slider } from "@mui/material";

import { ImgSaldo } from "../../components/imgSaldo/imgSaldo";
import { ProfileFormulary } from "../../components/profileFormulary/profileFormulary";

export const PerfilData = () => {
    const [userData, setUserData] = useState(null);
    const userId = sessionStorage.getItem("user");

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await userService.fetchUserData(userId);
            setUserData(data);
            console.log("Datos del usuario:", data);
        };
        fetchUserData();
    }, [userId]);

    return (
        <>
            <div className="containerData">
                <h2>Informacion Personal</h2>
                <div className="containerInfo" >
                    <ImgSaldo data={userData}></ImgSaldo>
                    <ProfileFormulary data={userData}></ProfileFormulary>
                </div>
            </div >
        </>
    )
}
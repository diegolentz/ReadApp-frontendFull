import React from "react";
import { HeaderComponent } from "../../components/header/header";
import './createEditRecomendation.css';
import { InputApp } from "../../components/input/input";
import { Button } from "@mui/material";

export const CreateEditRecomendation = ({ isEdit }) => {
    const img = sessionStorage.getItem('img') || '/public/logoApp.png';

    return (
        <>
            <HeaderComponent />
            <div className="recomendationCreateEditContainer">
                <div className="imagenCratorTitle">
                    <img className="imgRecomendation" src={img} alt="" />
                </div>
                <div className="inputCreateRecomendation">
                    <label>Titulo</label>
                    <input type="text" />
                </div>
                <div className="inputCreateRecomendation">
                    <label>Descripción</label>
                    <textarea rows={10} />
                </div>
                <div className="booksInRecomendation">
                        <h2>Libros</h2>
                    <div className="listBooksRecomendation">
                        <p>Libro 1</p>
                        <p>Libro 2</p>
                        <p>Libro 3</p>
                    </div>

                </div>
                <div className="buttonCreateRecomendation">
                    <Button variant="contained">{isEdit ? 'Guardar Cambios' : 'Crear Recomendación'}</Button>
                </div>
            </div>
        </>
    );
}
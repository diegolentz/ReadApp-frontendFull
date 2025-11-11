import React from "react";
import './bookCardProfile.css'
import { Button } from "@mui/material";

export const BookCardProfile = ({book}) => {

    return (<>
        <div className="cardProfilecontainer">
            <div className="bookProfileImgInfo">
                <img className="bookProfileImg" src={book.img} alt={book.title} />
                <div className="titleAutorProfile">
                    <p>Titulo: {book.title}</p>
                    <p>Autor: {book.author.name} {book.author.lastname}</p>
                </div>
            </div>
            <div className="bookProfileGenereBtn">
                <div className="genereFiccionProfile">
                    <p>{book.genere}</p>
                </div>
                <div className="priceSell">
                    <p>Precio: ${book.price}</p>
                    <Button variant="contained" color="error">Vender</Button>
                </div>
            </div>
        </div>
    </>)
}
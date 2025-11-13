import React from "react";
import './bookCardProfile.css'
import { Button } from "@mui/material";

export const BookCardProfile = ({book, sell}) => {
    const sellItem = () => {
        console.log("Vender libro con id:", book.id);
        sell(book.id);
    }


    return (<>
        <div className="cardProfilecontainer">
            <div className="bookProfileImgInfo">
                <img className="bookProfileImg" src={book.img} alt={book.title} />
                <div className="titleAutorProfile">
                    <p>Titulo: {book.title}</p>
                    <p>Autor: {book.author.name} {book.author.lastname}</p>
                <div className="genereFiccionProfile">
                    <p>{book.genere}</p>
                </div>
                </div>
            </div>
            <div className="bookProfileGenereBtn">
                <div className="priceSell">
                    <p>Precio: ${book.price}</p>
                    <Button variant="contained" color="error" sx={{
                        fontSize: '1.5rem'
                    }}
                    onClick={sellItem}>Vender</Button>
                </div>
            </div>
        </div>
    </>)
}
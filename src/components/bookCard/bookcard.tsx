import React from "react";
import './bookCard.css'

export const BookCard = ({ book }) => {
    return (
        <>
            <div className="containerCard">

                <div className="cardTitle">
                    <h3>{book.title}</h3>
                </div>
                <div className="data">
                    <p>Por: {book.author.name} {book.author.lastname}</p>
                    <p>Paginas: {book.pages}</p>
                    <p>Traducciones: {book.translations.length} idiomas</p>
                </div>
                <div className="img">
                    <img src={book.img} alt={book.title} />
                </div>
                    <div className="icons">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                <div className="actionsCard">
                    <button className="buttonCard">Agregar +</button>
                </div>
            </div>
        </>
    )
}
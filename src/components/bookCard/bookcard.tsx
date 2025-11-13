import React from "react";
import './bookCard.css'
import { Button } from "@mui/material";
import { Spa, SpaRounded } from "@mui/icons-material";
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';

export const BookCard = ({ book, method }) => {
    if (!book || !book.author) return null; // evita romper

    const buy = () =>{
        method(book.id);
    }
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
                    <p>{book.genere}</p>
                </div>
                <div className="img">
                    <img src={book.img} alt={book.title} />
                </div>
                <div className="actionsCard" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p><AttachMoneySharpIcon sx={{ fontSize: '2.5rem', color: 'green' }} />{book.price}</p>
                    <Button
                        className="buttonCard"
                        variant="contained"
                        sx={{
                            color: 'white',
                            backgroundColor: 'VAR(--button-buy)',
                            fontSize: '1rem',
                            padding: '0.4rem 1.2rem',
                            width: '11rem',
                            height: '4rem',
                            gap: '0.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        onClick={buy}
                    >
                        <AddShoppingCartSharpIcon sx={{
                            fontSize:'2.5rem'
                        }}/>
                    </Button>
                </div>
            </div>
        </>
    )
}
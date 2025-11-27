import { useEffect, useState } from "react";
import { BookCardProfile } from "../../components/bookCardProfile/bookCardProfile";
import { SearchComponent } from "../../components/search/search";
import { bookService } from "../../services/bookService";
import { recomendationService } from "../../services/recomendationService";
import './perfilMyBooks.css';
import React from 'react';
import { RecomendationCard } from "../../components/recomendationCard/recomendationCard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PerfilMyBooks = ({ isBook }) => {
    const [data, setData] = useState([])
    const nav = useNavigate();

    const searchByText = async (text) => {
        const results = await bookService.searchMyBooksByText(text);
        setData(results);
    }

    const searchRecsByText = async (text) => {
        if (!text) {
            const myRecommendations = await recomendationService.getMyRecommendations();
            setData(myRecommendations);
            return;
        }
        const results = await recomendationService.searchMyRecommendationsByText(text);
        setData(results);
    }

    const sellBook = async (id) => {
        const res = await bookService.sellBook(id);
        if (res <= 300) {
            const updatedBooks = data.filter(book => book.id !== id);
            setData(updatedBooks);
        }
        else {
            alert(res);
        }
    }

    useEffect(() => {
        setData([]);
        const fetchData = async () => {
            if (isBook) {
                const myBooks = await bookService.getMyBooks();
                setData(myBooks);
            } else {
                const myRecommendations = await recomendationService.getMyRecommendations();
                setData(myRecommendations);
            }
        };
        fetchData();
    }, [isBook])

    return (
        <>
            {isBook && (
                <>
                    <div className="containerData">
                        <h2>Mis Libros</h2>
                        <SearchComponent findByText={searchByText} withFilter={false} findByFilter={undefined} />
                        {data.map((book) => (
                            <div className="bookCardContainer" key={book.id}>
                                <BookCardProfile book={book} key={book.id} sell={sellBook} />
                            </div>
                        ))}
                    </div>
                </>
            )}
            {!isBook && (
                <>
                    <div className="containerData">

                        <h2>Mis Recomendaciones</h2>
                        <SearchComponent findByText={searchRecsByText} withFilter={false} findByFilter={undefined} />
                        <Button
                        variant="contained"
                        style={{ fontSize: '1.8rem',    marginBottom: '1rem', backgroundColor: 'var(--button-acept)' }}
                        onClick={() => nav('/perfil/crear-recommendacion')}>Crear Recomendacion</Button>
                        <div className="recommendationCardContainer" >
                        {data.map((recommendation) => (
                                <RecomendationCard recomendation={recommendation} key={recommendation.id} method={undefined} isEdit={true} />
                            ))}
                            </div>
                    </div>
                </>
            )}


        </>
    )
}

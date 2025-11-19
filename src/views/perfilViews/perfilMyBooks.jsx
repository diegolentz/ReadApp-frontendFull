import { useEffect, useState } from "react";
import { BookCardProfile } from "../../components/bookCardProfile/bookCardProfile";
import { SearchComponent } from "../../components/search/search";
import { bookService } from "../../services/bookService";
import { recomendationService } from "../../services/recomendationService";
import './perfilMyBooks.css';
import React from 'react';
import { RecomendationCard } from "../../components/recomendationCard/recomendationCard";

export const PerfilMyBooks = ({ isBook }) => {
    const [data, setData] = useState([])

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
        if(res <= 300) {
            const updatedBooks = data.filter(book => book.id !== id);
            setData(updatedBooks);
        }
        else{
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
            <div className="containerData">
             {isBook && (
                <>
                    <h2>Mis Libros</h2>
                    <SearchComponent findByText={searchByText} withFilter={false} findByFilter={undefined} />
                    {data.map((book) => (
                        <div className="bookCardContainer" key={book.id}>
                            <BookCardProfile book={book} key={book.id} sell={sellBook} />
                        </div>
                    ))}
                </>
            )}
            {!isBook && (
                <>
                    <h2>Mis Recomendaciones</h2>
                    <SearchComponent findByText={searchRecsByText} withFilter={false} findByFilter={undefined} />
                    {data.map((recommendation) => (
                        <div className="recommendationCardContainer" key={recommendation.id}>
                            <RecomendationCard recomendation={recommendation} key={recommendation.id} method={undefined} isEdit={true} />
                        </div>
                    ))}
                </>
            )}
            </div>


        </>
    )
}

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BookCard } from "../../components/bookCard/bookcard";
import { bookService } from "../../services/bookService";
import './contentView.css';
import { HeaderComponent } from '../../components/header/header';

export const BookView = () => {

    const [data, setData] = useState([]);
    const location = useLocation();
    const reBooks = location.pathname.includes("libros");

    const fetchData = async () => {

        const res = await bookService.getAll();
        setData(res);
    };
    useEffect(
        () => {
            fetchData();
        }, []
    )

    return (
        <>
            <HeaderComponent />
            <div className="viewsContainer">
                {reBooks && (
                    <>
                        {data.map((book, index) => (
                            <BookCard key={index} book={book} />
                        ))}
                    </>
                )}

                {!reBooks && (
                    <p>No books available</p>
                )}
            </div>
        </>
    )
}
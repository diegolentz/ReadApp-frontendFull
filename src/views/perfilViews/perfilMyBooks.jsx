import React, { useEffect, useState } from "react";
import './perfilMyBooks.css'
import { BookCardProfile } from "../../components/bookCardProfile/bookCardProfile"
import { bookService } from "../../services/bookService";
import { SearchComponent } from "../../components/search/search";

export const PerfilMyBooks = () => {
    const [data, setData] = useState([])

    const searchByText = async (text) => {
        const results = await bookService.searchMyBooksByText(text);
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
        const fetchData = async () => {
            const myBooks = await bookService.getMyBooks()
            setData(myBooks)
        };
        fetchData();
    }, [])

    return (
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
    )
}

import React, { useEffect, useState } from "react";
import './perfilMyBooks.css'
import { BookCardProfile } from "../../components/bookCardProfile/bookCardProfile"
import { bookService } from "../../services/bookService";
import { SearchComponent } from "../../components/search/search";

export const PerfilMyBooks = () => {
    const [data, setData] = useState([])


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
                <SearchComponent findByText={undefined} withFilter={undefined} findByFilter={undefined} />
                {data.map((book) => (
                    <div className="bookCardContainer" key={book.id}>
                        <BookCardProfile book={book} key={book.id} />
                    </div>
                ))}

            </div>


        </>
    )
}

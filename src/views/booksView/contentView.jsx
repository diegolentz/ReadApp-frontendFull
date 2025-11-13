import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import { BookCard } from "../../components/bookCard/bookcard";
import { HeaderComponent } from "../../components/header/header";
import { RecomendationCard } from "../../components/recomendationCard/recomendationCard";
import { SearchComponent } from "../../components/search/search";
import { bookService } from "../../services/bookService";
import { recomendationService } from "../../services/recomendationService";
import "./contentView.css";
import React from 'react';
import { userService } from '../../services/userService';

export const BookView = ({ isBooks }) => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);

  const getBook = async (text, pageToFetch = page) => {
    const res = await bookService.getByText(text, pageToFetch - 1);
    setData(res.content);
    setPages(res.totalPages);
  };

  const getGenereBooks = async (genre, pageToFetch = page) => {
    const res = await bookService.getByGenere(genre, pageToFetch - 1);
    setData(res.content);
    setPages(res.totalPages);
  };

  const handlePageChange = async (event, value) => {
    setPage(value);
    // Aquí decides si repites la búsqueda, filtro, o todos los libros
    if (isBooks) {
      const res = await bookService.getAll(value - 1);
      setData(res.content);
      setPages(res.totalPages);
    } else {
      const res = await recomendationService.getRecommendations(value - 1);
      setData(res.content);
      setPages(res.totalPages);
    }
  };

  const buyBook = async (bookId) => {
    const res = await userService.buyBook(bookId);
    if (res <= 299){
      console.log("Compra exitosa");
    }
  }

  // Carga inicial y cuando cambia el tipo de vista; no reiniciamos página en cada cambio de página
  useEffect(() => {
    const fetchData = async () => {
      setData([]);
      const firstPage = 0; // backend espera base 0
      if (isBooks) {
        const res = await bookService.getAll(firstPage);
        setData(res.content);
        setPages(res.totalPages);
      } else {
        const res = await recomendationService.getRecommendations(firstPage);
        setData(res.content);
        setPages(res.totalPages);
      }
      setPage(1); // reiniciar a 1 solo cuando cambia isBooks
    };
    fetchData();
  }, [isBooks]);

  return (
    <>
      <div className="contentViewContainer">

        <HeaderComponent />
        <SearchComponent findByText={getBook} withFilter={isBooks} findByFilter={getGenereBooks} />
       
        <div className="viewsContainer">
          {isBooks
            ? data.map((rec, index) => (
              <BookCard key={index} book={rec} method={buyBook}/>
            ))
            : data.map((rec, index) => (
              <RecomendationCard key={index} recomendation={rec} />
            ))}
        </div>
        <div className="pagination">
          <Stack spacing={2} sx={{ height: '3rem' }}>
            <Pagination
              count={pages}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              size="large"
              sx={{
                height: 'auto',
                '& .MuiPaginationItem-root': {
                  fontSize: '1.3rem',
                  // padding: '0.5rem',
                  backgroundColor: 'white',
                  '&:hover': { backgroundColor: 'white', color: 'black' },
                  '&.Mui-selected': { backgroundColor: 'var(--menu-bkg)', color: 'black' },
                },
              }}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};
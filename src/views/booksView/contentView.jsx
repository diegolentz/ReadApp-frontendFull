import React, { useEffect, useState } from "react";
import { BookCard } from "../../components/bookCard/bookcard";
import { HeaderComponent } from "../../components/header/header";
import { RecomendationCard } from "../../components/recomendationCard/recomendationCard";
import { bookService } from "../../services/bookService";
import { recomendationService } from "../../services/recomendationService";
import "./contentView.css";

export const BookView = ({ isBooks }) => {
  const [data, setData] = useState([]);

  const getBook = async (text) => {
    const res = await bookService.getByText(text);
    setData(res);
  };

  useEffect(() => {
    const fetchData = async () => {
      setData([]); // limpia antes de cargar
      if (isBooks) {
        const res = await bookService.getAll();
        setData(res);
      } else {
        const res = await recomendationService.getRecommendations();
        setData(res);
      }
    };
    fetchData();
  }, [isBooks]); 

  useEffect(() => {
    console.log("Data actualizado:", data);
  }, [data]);

  return (
    <>
      <HeaderComponent method={getBook} withSearch={true} />
      <div className="viewsContainer">
        {isBooks
          ? data.map((rec, index) => (
              <BookCard key={index} book={rec} />
            ))
          : data.map((rec, index) => (
              <RecomendationCard key={index} recomendation={rec} />
            ))}
      </div>
    </>
  );
};
